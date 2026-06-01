<?php

include("conexion.php");

$sql="SELECT * FROM entregas_trabajos";

$resultado=mysqli_query($conexion,$sql);

$datos=array();

while($fila=mysqli_fetch_assoc($resultado))
{
 $datos[]=$fila;
}

echo json_encode($datos);

?>