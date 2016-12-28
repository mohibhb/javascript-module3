function myFunction (event ) {
		document.body.style.backgroundColor =event.value;
}

function onBlurFunc(value) {
	console.info(value);
  document.body.style.backgroundColor= "blue";
}
function changeColor(green) {
    //console.log('Hello world!');
}
setTimeout(changeColor, 1000);
setTimeout(function() { console.log('Goodbye world!'); }, 500)