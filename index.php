<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Registro de Entregas de Trabajos</title>

<link rel="stylesheet" href="estilos.css">
</head>

<body>

<div class="contenedor">

<h1>Registro de Entregas de Trabajos</h1>

<input type="text" id="nombre_trabajo" placeholder="Nombre del trabajo">

<input type="text" id="materia" placeholder="Materia">

<input type="text" id="alumno" placeholder="Alumno">

<select id="estado">
<option value="">Seleccione estado</option>
<option value="Entregado">Entregado</option>
<option value="Pendiente">Pendiente</option>
</select>

<textarea id="observaciones"
placeholder="Observaciones"></textarea>

<button onclick="guardarRegistro()">
Guardar Registro
</button>

<button onclick="consultarRegistros()">
Consultar Registros
</button>

<table id="tabla">

<thead>

<tr>
<th>ID</th>
<th>Trabajo</th>
<th>Materia</th>
<th>Alumno</th>
<th>Estado</th>
<th>Observaciones</th>
<th>Fecha</th>
</tr>

</thead>

<tbody id="contenidoTabla">

</tbody>

</table>

</div>

<script src="script.js"></script>

</body>
</html>
