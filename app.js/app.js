alert("JavaScript cargado correctamente");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Configuración Firebase
const firebaseConfig= {
  apiKey: "AIzaSyAEoNI_vja4_a6gJyA71vZLK84SToHZHDc",
  authDomain: "entrega-trabajos.firebaseapp.com",
  databaseURL: "https://entrega-trabajos-default-rtdb.firebaseio.com",
  projectId: "entrega-trabajos",
  storageBucket: "entrega-trabajos.firebasestorage.app",
  messagingSenderId: "414989338316",
  appId: "1:414989338316:web:f86ab0315f24c78d856469"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Nodo principal de la base de datos
const dbRef = ref(db, "prestamos_didacticos");

// Elementos del DOM
const form = document.getElementById("formRefacciones");
const btnConsultar = document.getElementById("btnConsultar");
const mensajeDiv = document.getElementById("mensaje");
const seccionConsulta = document.getElementById("seccionConsulta");
const tablaContenedor = document.getElementById("tablaRegistros");

// Guardar registro
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const dato = document.getElementById("dato").value.trim();
    const observaciones = document.getElementById("observaciones").value.trim();

    const fechaRegistro = new Date().toLocaleString("es-MX");

    if (!nombre || !categoria || !dato) {
        mostrarMensaje(
            "❌ Los campos Material, Categoría y Dato adicional son obligatorios.",
            "error"
        );
        return;
    }

    const nuevoRegistro = {
        nombre,
        categoria,
        dato_adicional: dato,
        observaciones,
        fecha_registro: fechaRegistro
    };

    push(dbRef, nuevoRegistro)
        .then(() => {
            mostrarMensaje(
                "✅ Préstamo didáctico registrado correctamente.",
                "exito"
            );
            form.reset();
        })
        .catch((error) => {
            mostrarMensaje(
                "❌ Error al guardar: " + error.message,
                "error"
            );
        });
});

// Consultar registros
btnConsultar.addEventListener("click", () => {

    get(dbRef)
        .then((snapshot) => {

            if (snapshot.exists()) {

                const datos = snapshot.val();
                const registros = [];

                Object.keys(datos).forEach((key) => {
                    registros.push({
                        id: key,
                        ...datos[key]
                    });
                });

                let tablaHTML = `
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Material</th>
                            <th>Categoría</th>
                            <th>Dato adicional</th>
                            <th>Observaciones</th>
                            <th>Fecha de registro</th>
                        </tr>
                `;

                registros.forEach((reg) => {
                    tablaHTML += `
                        <tr>
                            <td>${reg.id.substring(0, 6)}</td>
                            <td>${reg.nombre}</td>
                            <td>${reg.categoria}</td>
                            <td>${reg.dato_adicional}</td>
                            <td>${reg.observaciones || "Sin observaciones"}</td>
                            <td>${reg.fecha_registro}</td>
                        </tr>
                    `;
                });

                tablaHTML += `</table>`;

                tablaContenedor.innerHTML = tablaHTML;
                seccionConsulta.style.display = "block";

            } else {

                tablaContenedor.innerHTML =
                    "<p>⚠️ No existen registros almacenados.</p>";

                seccionConsulta.style.display = "block";
            }
        })
        .catch((error) => {
            mostrarMensaje(
                "❌ Error al consultar: " + error.message,
                "error"
            );
        });
});

// Mostrar mensajes
function mostrarMensaje(texto, tipo) {

    mensajeDiv.textContent = texto;
    mensajeDiv.className = "mensaje " + tipo;
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
  }, 4000);

}
