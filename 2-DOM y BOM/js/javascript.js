
//Funcion para cargar y mostrar los estudiantes
document.getElementById("registrar").addEventListener("click", registro);

	var alumnos = '{"estudiantes" : [ ]}';

	var jsonObject = JSON.parse(alumnos);
	
	function registro(){
		var cod = document.getElementById("codigo").value;
		var nom = document.getElementById("nombre").value;
		var not = parseFloat(document.getElementById("nota").value);
		jsonObject.estudiantes.push({"codigo":cod,"nombre":nom,"nota":not});

		var tab = document.getElementById("tabla");{
			var row = tab.insertRow(1);
			var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);

			cell1.innerHTML = cod;
			cell2.innerHTML = nom;
			cell3.innerHTML = not;
		}
		
		alert("Usuario Registrado con exito!!");
	}

//Mostrar Promedio
document.getElementById("promedio").addEventListener("click", mostrarPromedio);

function mostrarPromedio() {
		  var suma = 0;
  		var numero = 0;
  		for (var i in jsonObject.estudiantes) {
    	if (!isNaN(jsonObject.estudiantes[i].nota)) {
      	numero++;
      	suma += jsonObject.estudiantes[i].nota;
    	}
  		}
  	if (numero > 0) {
    alert("Nota Promedio es: " + (suma / numero));
  }
}

//Mostrar NotaAlta
document.getElementById("notaAlta").addEventListener("click", mostrarNotaAlta);

	function mostrarNotaAlta() {
		var i;
		var nota_mayor = 0;
		var nombre_estudiante = "";

		for (i = 0; i < jsonObject.estudiantes.length; i++) {

			if (nota_mayor < jsonObject.estudiantes[i].nota) {
				nota_mayor = jsonObject.estudiantes[i].nota;
				nombre_estudiante = jsonObject.estudiantes[i].nombre;

			alert("La nota mayor es: "+nota_mayor+" del/la estudiante: "+nombre_estudiante);
			} 
		}
	}

//Mostrar NotaBaja
document.getElementById("notaBaja").addEventListener("click", mostrarNotaBaja);

	function mostrarNotaBaja() {
		var i;
		var nota_menor = jsonObject.estudiantes[0].nota;
		var nombre_estudiante = "";

		for (i = 0; i < jsonObject.estudiantes.length; i++) {

		if (nota_menor > jsonObject.estudiantes[i].nota) {
				nota_menor = jsonObject.estudiantes[i].nota;
				nombre_estudiante = jsonObject.estudiantes[i].nombre;

			alert("La nota menor es: "+nota_menor+" del/la estudiante: "+nombre_estudiante);
			} 
		}
	}

