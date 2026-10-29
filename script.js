const phoneNumber = "358417945460";
		const services = { classic: { label: "Klassinen hieronta, 60 min", price: 30 }, neck: { label: "Niskahieronta, 30 min", price: 20 }, lower: { label: "Alavartalon hieronta, 45 min", price: 30 } };
		const locations = { studio: { label: "Punkaharju (ei kotikäyntiä)", extra: 0 }, punkaharju: { label: "Kotikäynti Punkaharjulla", extra: 10 }, savonlinna: { label: "Kotikäynti Savonlinnassa", extra: 20 } };
		function updateTotal() { const service = services[document.getElementById("service").value], location = locations[document.getElementById("location").value]; document.getElementById("total").textContent = service && location ? "Yhteensä: " + (service.price + location.extra) + " € (hieronta " + service.price + " € + kotikäyntilisä " + location.extra + " €)" : "Valitse palvelu ja paikka nähdäksesi kokonaishinnan."; }
		document.getElementById("service").addEventListener("change", updateTotal); document.getElementById("location").addEventListener("change", updateTotal);
		document.getElementById("year").textContent = new Date().getFullYear();
		const dateInput = document.getElementById("date"); const today = new Date(); dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
		document.getElementById("bookingForm").addEventListener("submit", function (event) {
			event.preventDefault();
			const name = document.getElementById("name").value.trim(), phone = document.getElementById("phone").value.trim(), date = dateInput.value, time = document.getElementById("time").value, message = document.getElementById("message").value.trim();
			const service = services[document.getElementById("service").value], location = locations[document.getElementById("location").value];
			const text = ["Hei Iuliia! Haluaisin varata hieronta-ajan.", "", "Nimi: " + name, "Puhelinnumero: " + phone, "Palvelu: " + service.label + " (" + service.price + " €)", "Paikka: " + location.label + " (lisämaksu " + location.extra + " €)", "Yhteensä: " + (service.price + location.extra) + " €", "Toivottu aika: " + date + " klo " + time, message ? "Lisätietoja: " + message : ""].filter(Boolean).join("\n");
			window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text), "_blank", "noopener");
		});
