<?php
include("conexion.php");
?>

<!DOCTYPE html>
<html lang="es">
<head>

<meta charset="UTF-8">

<title>Registro de Entregas de Trabajos</title>

<style>

body{
font-family:Arial;
background:#f4f6f9;
margin:0;
padding:20px;
}

.container{
max-width:1100px;
margin:auto;
background:white;
padding:20px;
border-radius:10px;
box-shadow:0px 0px 10px #ccc;
}

h1{
text-align:center;
color:#1565c0;
}

form{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
}

input,textarea,select{
padding:10px;
border:1px solid #ccc;
border-radius:5px;
}

textarea{
grid-column:span 2;
}

button{
grid-column:span 2;
padding:12px;
background:#1565c0;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#0d47a1;
}

table{
width:100%;
margin-top:20px;
border-collapse:collapse;
}

th{
background:#1565c0;
color:white;
padding:10px;
}

td{
padding:10px;
border:1px solid #ddd;
}

</style>

</head>

<body>

<div class="container">

<h1>Registro de Entregas de Trabajos</h1>

<form action="insertar.php" method="POST">

<input type="text"
name="nombre_trabajo"
placeholder="Nombre del trabajo"
required>

<input type="text"
name="materia"
placeholder="Materia"
required>

<input type="text"
name="alumno"
placeholder="Alumno"
required>

<select name="estado" required>

<option value="">Seleccione estado</option>

<option>Entregado</option>

<option>Pendiente</option>

</select>

<textarea
name="observaciones"
placeholder="Observaciones">
</textarea>

<button type="submit">
Guardar Registro
</button>

</form>

<h2>Registros Guardados</h2>

<table>

<tr>

<th>ID</th>
<th>Trabajo</th>
<th>Materia</th>
<th>Alumno</th>
<th>Estado</th>
<th>Observaciones</th>
<th>Fecha</th>

</tr>

<?php
include("consultar.php");
?>

</table>

</div>

</body>
</html>