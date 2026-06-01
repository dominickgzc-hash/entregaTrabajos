<?php

include("conexion.php");

$nombre_trabajo=$_POST['nombre_trabajo'];
$materia=$_POST['materia'];
$alumno=$_POST['alumno'];
$estado=$_POST['estado'];
$observaciones=$_POST['observaciones'];

$sql="INSERT INTO entregas_trabajos
(nombre_trabajo,materia,alumno,estado,observaciones)
VALUES
('$nombre_trabajo',
 '$materia',
 '$alumno',
 '$estado',
 '$observaciones')";

if(mysqli_query($conexion,$sql)){
    echo "Registro guardado correctamente";
}else{
    echo "Error al guardar";
}
?>