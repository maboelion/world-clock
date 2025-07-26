function updateTime() {
	// Hamburg
	let hamburgElement = document.querySelector("#hamburg");
	if (hamburgElement) {
		let hamburgDateElement = hamburgElement.querySelector(".date");
		let hamburgTimeElement = hamburgElement.querySelector(".time");
		let hamburgTime = moment().tz("Europe/Berlin");
		hamburgDateElement.innerHTML = hamburgTime.format("MMMM Do YYYY");
		hamburgTimeElement.innerHTML = hamburgTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}
	// Dublin
	let dublinElement = document.querySelector("#dublin");
	if (dublinElement) {
		let dublinDateElement = dublinElement.querySelector(".date");
		let dublinTimeElement = dublinElement.querySelector(".time");
		let dublinTime = moment().tz("Europe/Dublin");
		dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
		dublinTimeElement.innerHTML = dublinTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}
}

function updateCity(event) {
	let cityTimezone = event.target.value;
	if (cityTimezone === "current") {
		cityTimezone = moment.tz.guess();
	}
	let cityName = cityTimezone.split("/")[1];
	let cityTime = moment().tz(cityTimezone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
    <div class="city">
					<div>
						<h2>${cityName}</h2>
						<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
					</div>
					<div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
				</div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
