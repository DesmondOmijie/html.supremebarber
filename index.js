let button = document.querySelector(".btn");




button.addEventListener("click", function(){
	let phoneNumber = "2349068001346"
	let message = "Hello, I want to book an appointment";

	let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
	window.open(url, "_blank");
} );