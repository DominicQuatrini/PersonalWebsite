var map = L.map('map');

let bounds = L.latLngBounds();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadConcerts() {
    console.log("Starting loadConcerts...");

    const response = await fetch('/api/concerts');

    if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
    }

    const concerts = await response.json();

    console.log("Concerts:", concerts);

    const venues = {};

    for (const concert of concerts) {
        const venueKey = concert.venue_name;

        if (!venues[venueKey]) {
            venues[venueKey] = {
                venue_name: concert.venue_name,
                venue_latitude: concert.venue_latitude,
                venue_longitude: concert.venue_longitude,
                concerts: []
            };
        }

        venues[venueKey].concerts.push(concert);
    }

    console.log("Venues:", venues);

    const markerGroup = L.markerClusterGroup({
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        spiderfyDistanceMultiplier: 2,
        maxClusterRadius: 30
    });

    for (const venueName in venues) {

        const venue = venues[venueName];

        const marker = L.marker([
            venue.venue_latitude,
            venue.venue_longitude
        ]);

        let popupContent = `<strong>${venue.venue_name}</strong><br><br>`;

        for (const concert of venue.concerts) {
            popupContent += `
                <strong>${concert.artists}</strong><br>
                ${concert.concert_date}<br>
                ${concert.tour_name}<br>
                $${concert.ticket_price}<br><br>
            `;
        }

        marker.bindPopup(popupContent);

        markerGroup.addLayer(marker);

        bounds.extend([
            venue.venue_latitude,
            venue.venue_longitude
        ]);
    }

    markerGroup.addTo(map);
    map.fitBounds(bounds);
}

loadConcerts();