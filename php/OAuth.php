<?php
if (isset($_GET['code'])){
//	echo "Code:".$_GET['code'];
	$url1="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0f62fa624c959f2d&secret=efd23b9b00adef4894a6298db4248706";
	$data = json_decode(file_get_contents($url1),true);

	if($data['access_token']){
	//	echo "\naccess_token:".$data['access_token'];
		$accessToken= $data['access_token'];
		$wxNum=$data['openid'];
		$url="http://gezilife.sinaapp.com/html/index.html?wxNum=".$wxNum;
		header("Location: ".$url);
		exit; 
	}else{
		return "获取access_token错误";
	}
}else{
	echo "NO CODE";
}
?>