<?php 
	require_once 'dbclass.php';
	$userId = $_POST['userId'];

	$mySql = new MySql();
	$db = $mySql->dbConnect();
	if (!$db) {
		echo "DBF";
		return false;
	}
	$query = "select actionContent, startDate, endDate, actionColor from action where userId = ".$userId.";";

	$result = $db->query($query);
	if (!$result) {
		echo "DBF";
		return false;
	}else{
		$result = $mySql->resultToArray($result);
		echo json_encode($result);
		return true;
	}
 ?>