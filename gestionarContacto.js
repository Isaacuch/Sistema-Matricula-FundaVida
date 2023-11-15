$(document).ready(function(e) {


	$('#btnContact').click(function(){

		var inputNombre = document.getElementById("inputNombre").value;
		var inputCorreo = document.getElementById("inputCorreo").value;
		var inputTelefono = document.getElementById("inputTelefono").value;
		var inputMensaje = document.getElementById("inputMensaje").value;
		var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

		var datos = new FormData();
		datos.append("inputNombre", inputNombre);
		datos.append("inputCorreo", inputCorreo);
		datos.append("inputTelefono", inputTelefono);
		datos.append("inputMensaje", inputMensaje);


		if(inputNombre == "" || inputCorreo == "" || inputTelefono == "" || inputMensaje == ""){

		/*####################*/
		swal({
		title: "UPS!",
		text: "Debe completar todos los campos del formulario.",
		icon: "error",
		button: "Aceptar",
		});
		/*####################*/

		}else if(!regex.test(inputCorreo)){

						/*####################*/
						swal({
						title: "UPS!",
						text: "El correo es incorrecto. Ingrese un correo válido.",
						icon: "error",
						button: "Aceptar",
						});
						/*####################*/


						}else{

							/*####################*/
							/*####### INICIO ########*/
							/*####################*/
							$.ajax({
							url:"formularioContacto.php",
							method:"POST",
							data: datos,
							cache: false,
							contentType:false,
							processData:false,
							success: function(respuesta){

								console.log(respuesta);
								if(respuesta == true){
									/*###################*/
									document.getElementById("inputNombre").value = "";
									document.getElementById("inputCorreo").value = "";
									document.getElementById("inputTelefono").value = "";
									document.getElementById("inputMensaje").value = "";
									/*####################*/
									swal({
									title: "Mensaje enviado con éxito!",
									text: "Pronto nos comunicaremos con usted.",
									icon: "success",
									button: "Aceptar",
									});
									/*###################*/
									}else{
										/*####################*/
										swal({
										title: "UPS!",
										text: "Error al enviar el mensaje. Inténtelo más tarde..",
										icon: "error",
										button: "Aceptar",
										});
										/*####################*/
										}

								}
							});
							/*####################*/
							/*####### FIN ########*/
							/*####################*/

							}


	});


});
