<?php 
	require_once 'dbclass.php';
	$userId = $_POST['userId'];

	$mySql = new MySql();
	$db = $mySql->dbConnect();
	if (!$db) {
		echo "DBF";
		return false;
	}
	$query = "select name from user where userId = ".$userId.";";

	$result = $db->query($query);
	if (!$result || $result->num_rows == 0) {
		echo "DBF";
		return false;
	}else{
		$result = $mySql->resultToArray($result);
		foreach ($result as $row) {
			echo $row['name'];
			return true;
		}
	}
		
 ?>