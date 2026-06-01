<?php

include("conexion.php");

$sql="SELECT * FROM entregas_trabajos ORDER BY id DESC";

$resultado=mysqli_query($conexion,$sql);

while($fila=mysqli_fetch_assoc($resultado))
{
    echo "<tr>";

    echo "<td>".$fila['id']."</td>";
    echo "<td>".$fila['nombre_trabajo']."</td>";
    echo "<td>".$fila['materia']."</td>";
    echo "<td>".$fila['alumno']."</td>";
    echo "<td>".$fila['estado']."</td>";
    echo "<td>".$fila['observaciones']."</td>";
    echo "<td>".$fila['fecha_registro']."</td>";

    echo "</tr>";
}
?>