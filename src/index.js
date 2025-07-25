function updateTime() {
	// Hamburg
	let hamburgElement = document.querySelector("#hamburg");
	let hamburgDateElement = hamburgElement.querySelector(".date");
	let hamburgTimeElement = hamburgElement.querySelector(".time");
	let hamburgTime = moment().tz("Europe/Berlin");
	hamburgDateElement.innerHTML = hamburgTime.format("MMMM Do YYYY");
	hamburgTimeElement.innerHTML = hamburgTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);
	// Dublin
	let dublinElement = document.querySelector("#dublin");
	let dublinDateElement = dublinElement.querySelector(".date");
	let dublinTimeElement = dublinElement.querySelector(".time");
	let dublinTime = moment().tz("Europe/Dublin");
	dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
	dublinTimeElement.innerHTML = dublinTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);
}

updateTime();
setInterval(updateTime, 1000);
