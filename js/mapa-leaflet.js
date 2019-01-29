// VARIABLE GLOBAL
let map


// DOM READY
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('mapid').setView([19.3991627, -99.1716421], 19);

    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(map);
    L.marker([19.3991627, -99.1714435]).addTo(map)
    .bindPopup('Grupo Eclipse')
    .openPopup();



})
