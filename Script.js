
window.addEventListener('load', ()=>{

	var evento1 = document.getElementById("evento1");
	var evento2 = document.getElementById("evento2");
	var ocultar1 = document.querySelector("#parrafoinf");
	var ocultar2 = document.querySelector("#label1");

	

	evento1.addEventListener('click', ()=>{


		ocultar1.animete()
		/*ocultar1.style.transition ="all 2s";
		ocultar2.style.transition= "all 2s";
		ocultar1.style.display = "none";
		ocultar2.style.display = "none";*/
		
		
		
	});


	evento2.addEventListener('click', ()=>{


		ocultar1.style.display = "block";
		ocultar2.style.display = "block";
		
		
	});



});
