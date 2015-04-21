<?php 
	require_once 'dbclass.php';
	
	$userId = $_POST['userId'];
	$actionContent = $_POST['actionContent'];
	$startDate = $_POST['startDate'];
	$endDate = $_POST['endDate'];
	$actionColor = $_POST['actionColor'];

	$mySql = new MySql();
	$db = $mySql->dbConnect();
	if (!$db) {
		echo "DBF";
		return false;
	}
	$query = "insert into action(userId, actionContent, startDate, endDate, actionColor) values (".$userId.", '".$actionContent."', '".$startDate."', '".$endDate."', '".$actionColor."')";

	$result = $db->query($query);
	if (!$result) {
		echo "DBF";
		return false;
	}else{
		echo "true";
		return true;
	}
 ?>