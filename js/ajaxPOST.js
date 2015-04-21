function POSTAJAX (urlStr, phpPath) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = urlStr;
	// alert(url);
	xmlhttp.open("POST",phpPath,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var Info = xmlhttp.responseText;
			return Info;
		}
	}
	xmlhttp.send(url);
}