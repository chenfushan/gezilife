<?php 
	require_once 'dbclass.php';

	$birthday = $_POST['birthday'];
	$age = $_POST['age'];
	$name = $_POST['name'];

	$mySql = new MySql();
	$db = $mySql->dbConnect();
	if (!$db) {
		echo "DBF";
		return false;
	}
	$query = "insert into user(name, birthday, age) values ('".$name."','".$birthday."', ".$age.")";

	$result = $db->query($query);
	if (!$result) {
		echo "DBF";
		return false;
	}else{
		$userId = $db->insert_id;
		echo $userId;
		return true;
	}
 ?>