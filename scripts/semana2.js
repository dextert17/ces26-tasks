function hello() {
	document.getElementById("hello-world").innerHTML = "Hello World!";
	document.getElementById("hello").style.cursor = "not-allowed";
	document.getElementById("hello").style.opacity = "0.6";
	document.getElementById("bye").style.visibility = "visible";
	document.getElementById("bye").style.display = "inline";
}

function bye() {
	document.getElementById("hello-world").innerHTML = "";
	document.getElementById("hello").style.cursor = "pointer";
	document.getElementById("hello").style.opacity = "1";
	document.getElementById("bye").style.visibility = "hidden";
	document.getElementById("bye").style.display = "none";
}