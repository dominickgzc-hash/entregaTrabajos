const URL_INSERTAR =
"https://dominick.alwaysdata.net/insertar.php";

const URL_CONSULTAR =
"https://dominick.alwaysdata.net/consultar.php";

async function guardarRegistro()
{
    const datos = new FormData();

    datos.append(
        "nombre_trabajo",
        document.getElementById("nombre_trabajo").value
    );

    datos.append(
        "materia",
        document.getElementById("materia").value
    );

    datos.append(
        "alumno",
        document.getElementById("alumno").value
    );

    datos.append(
        "estado",
        document.getElementById("estado").value
    );

    datos.append(
        "observaciones",
        document.getElementById("observaciones").value
    );

    const respuesta =
        await fetch(URL_INSERTAR,{
            method:"POST",
            body:datos
        });

    const texto = await respuesta.text();

    alert(texto);
}

async function consultarRegistros()
{
    const respuesta =
        await fetch(URL_CONSULTAR);

    const registros =
        await respuesta.json();

    let html = "";

    registros.forEach(registro => {

        html += `
        <tr>
        <td>${registro.id}</td>
        <td>${registro.nombre_trabajo}</td>
        <td>${registro.materia}</td>
        <td>${registro.alumno}</td>
        <td>${registro.estado}</td>
        <td>${registro.observaciones}</td>
        <td>${registro.fecha_registro}</td>
        </tr>
        `;
    });

    document.getElementById(
        "contenidoTabla"
    ).innerHTML = html;
}
