$(document).ready(main);
 
var contador = 1;
var info= document.getElementById('hola');
function main () {
	$('#btn').click(function(){
		console.log("click");
		console.log(info);

		if (contador == 1) {
			 info.classList.add("p-info");
			 info.classList.remove("p-info2");
		

			contador = 0;
		} else {
			contador = 1;
			
			

			 info.classList.add("p-info2");
			
			 info.classList.remove("p-info");
			 
		}
	});
 
	// Mostramos y ocultamos submenus
	
}