document.addEventListener("keyup", e=>{

	if(e.target.matches("#buscador")){

		if(e.key ==="Escape")e.target.value = ""

		document.querySelectorAll(".articulo").forEach(campeon =>{

			campeon.textContent.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value.toLowerCase() !== ""
			  ?campeon.classList.add("resaltarColor")
			  :campeon.classList.remove("resaltarColor")
		})
	}
	//Si
})