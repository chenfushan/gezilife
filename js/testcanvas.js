var locate;
var ctx;
var length = 10;
$(document).ready(function() {
	var theCanvas = document.getElementById("canvasOne");
	if (!theCanvas || !theCanvas.getContext) {
		alert("false");
	}
	// alert($(document).width());
	// alert($.browser.version)
	ctx = theCanvas.getContext("2d");
	// ctx.fillStyle = "#0000ff";
	// ctx.strokeRect(0, 0, 20, 20);
	for (var i = 0; i < 32; i++) {
		for (var j = 0; j < 30; j++) {
			ctx.fillStyle = "#0000ff";
			ctx.lineWidth="1";
			ctx.strokeRect(length*i, length*j, length, length);
		}
		// ctx.fillRect(x*i, y*i, length, length);	
	}
	// theCanvas.addEventListener("mousedown",doMouseDown, false);
});

function getPointOnCanvas(canvas, x, y) { 
	var bbox = canvas.getBoundingClientRect(); 
	return { x: x - bbox.left * (canvas.width / bbox.width), 
	y: y - bbox.top * (canvas.height / bbox.height) 
	}; 
} 

function doMouseDown(event) { 
	var x = event.pageX; 
	var y = event.pageY; 
	var canvas = event.target; 
	locate = getPointOnCanvas(canvas, x, y); 
	console.log("mouse down at point( x:" + locate.x/length + ", y:" + locate.y/length + ")"); 
	var xlocate = Math.floor(locate.x/length) * length;
	var ylocate = Math.floor(locate.y/length) * length;
	ctx.fillStyle = "#ffff00";
	ctx.fillRect(xlocate, ylocate, length, length);
} 