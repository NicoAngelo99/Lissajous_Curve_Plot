var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var increment = 1;

function drawXaxis(){
	c.moveTo(0, 350);
	c.lineTo(1200,350);
	c.stroke();
	c.closePath();
}

function drawYaxis(){
	c.moveTo(600, 0);
	c.lineTo(600, 700);
	c.stroke();
	c.closePath();
}
drawXaxis();
drawYaxis();
var parameter = [];
for(i=0;i<2*Math.PI*10; i++)
	parameter[i] = i/10;




var equation = document.getElementById('equation');

// function eq(i){
// 	return i;
// }

	function drawEquation(a,b){
		c.save();

		c.clearRect(0,0,canvas.width, canvas.height);
		drawYaxis();
		drawXaxis();
	c.beginPath();

	c.translate(600, 350);
    c.lineJoin = "round";
	c.scale(50,50);
	 c.lineWidth = "0.02";
		c.scale(1, -1);

	i = 0;
	t = 0;
    del = ((b-1)/b)*1.57;



	while(i<parameter.length){

		c.lineTo(Math.sin(a*parameter[i]+del), Math.cos(b*parameter[i]));
		i++;

	}
	c.lineTo(Math.sin(a*parameter[0]+del), Math.cos(b*parameter[0]));
	c.stroke();
	// while(i<600){
	// 		console.log("for " + i+ "equation is" + eq(i));
	// 	c.lineTo(i, eq(i));




	// 	i++;
	// }

	// c.stroke();
	// c.closePath();
	// c.beginPath();
	// i = -0;
	// while(i>-600){
	// 	console.log("for " + i+ "equation is" + eq(i));
	// 	c.lineTo(i, eq(i));


	// 	i-- ;
	// }
	// c.stroke();

c.closePath();
c.restore();
}
var go = document.getElementById('go');
go.onclick = function(){
drawEquation(10, 50);
}
function eq(i){

	 return eval(equation.value);

}
var aslider = document.getElementById('a');
var bslider = document.getElementById('b');
aslider.oninput = function(){
	console.log(aslider.value);

	drawEquation(aslider.value, bslider.value);
}
bslider.oninput = function(){
	drawEquation(aslider.value, bslider.value);
	console.log(bslider.value);
}
drawEquation(aslider.value, bslider.value);
// var x;
