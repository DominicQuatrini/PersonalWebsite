const map = L.map('map');
const bounds = L.latLngBounds();
let concertsAttended = 0;
let totalPrice = 0;
let venuesVisited = 0;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function fetchConcerts() { // fetches concert data from API (concerts.js) and returns as a json for leaflet markers and popups
    const response = await fetch('/api/concerts');
    const concerts = await response.json();
    console.log("Concerts:", concerts);
    return concerts;
}

function groupByVenue(concerts) {
    const venues = {};

    for (const concert of concerts) {
        concertsAttended++;
        if (concert.ticket_price !== null) {
            totalPrice += Number(concert.ticket_price);
        }

        const venueID = concert.venue_id; // venues object acts as a dictionary to group concerts by venue_id
        // assign each concert event to its venue group in the venues object for future marker popup display
        if (!venues[venueID]) { // if the venues object encounters a new venue_id, it creates a new object for that venue with its name, coordinates, and an empty concerts array
            venues[venueID] = {
                venue_name: concert.venue_name,
                venue_latitude: concert.venue_latitude,
                venue_longitude: concert.venue_longitude,
                concerts: []
            };
            venuesVisited++;
        }
        venues[venueID].concerts.push(concert); // adds the current concert to the concerts array of the corresponding venue object
    }
    console.log("Venues:", venues);
    return venues;
}

function resetMapView() {
    map.flyToBounds(bounds, {padding: [50, 50], duration: 1});
}

function zoomToVenue(venue) {
    map.flyTo([venue.venue_latitude, venue.venue_longitude], 14, {duration: 1});
}

function createVenueMarker(venue) {
    const marker = L.marker([venue.venue_latitude, venue.venue_longitude]);

    bindMarkerPopup(marker, venue);

    marker.on('click', () => {
        zoomToVenue(venue);
    });

    return marker;
}

function formatTourName(tourName) {
    if (tourName === null) {
        return '';
    }

    return `- ${tourName}`;
}

function formatDate(date) {
    return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatPrice(price) {
    if (price === null) {
        return 'Price unavailable';
    }

    return `$${Number(price).toFixed(2)}`;
}

function bindMarkerPopup(marker, venue) {
    let popupContent = `<strong>${venue.venue_name}</strong><br>`;

    for (const concert of venue.concerts) {
        popupContent += `
            <hr>
            <strong>${concert.artists}</strong> ${formatTourName(concert.tour_name)}<br>
            Date: ${formatDate(concert.concert_date)}<br>
            Ticket Price: ${formatPrice(concert.ticket_price)}<br>`;
    }
    marker.bindPopup(popupContent, {direction: 'auto', maxHeight: 200});
}

function addHomeButton() {
    const homeControl = L.Control.extend({
    options: {position: 'topleft'},
        onAdd: function () {
            const button = L.DomUtil.create('button', 'leaflet-bar leaflet-control home-button');

            button.innerHTML = '<img id="home-icon" src="assets/icons/home.svg" alt="Home">';
            button.title = 'Reset map view';
            button.type = 'button';

            button.addEventListener('click', resetMapView);

            L.DomEvent.disableClickPropagation(button);

            return button;
        }
    });
    map.addControl(new homeControl());
}

function addConcertStats() {
    const concertStatsControl = L.Control.extend({
    options: {position: 'bottomleft'},
        onAdd: function () {
            const button = L.DomUtil.create('button', 'leaflet-bar leaflet-control stats-button');

            button.innerHTML = `<strong>My Concert Stats</strong><br>
                                ${concertsAttended} concerts attended<br>
                                ${totalPrice.toFixed(2)} spent on tickets<br>
                                ${venuesVisited} venues visited
                                `;

            button.type = 'button';

            L.DomEvent.disableClickPropagation(button);

            return button;
        }
    });
    map.addControl(new concertStatsControl());
}

async function loadConcerts() {
    const concerts = await fetchConcerts();
    const venues = groupByVenue(concerts);

    const markerGroup = L.layerGroup();

    for (const venueID in venues) {
        const venue = venues[venueID];
        const marker = createVenueMarker(venue);

        markerGroup.addLayer(marker);

        bounds.extend([
            venue.venue_latitude,
            venue.venue_longitude
        ]);
    }

    markerGroup.addTo(map);
    map.fitBounds(bounds, {padding: [50, 50]});
}

loadConcerts();
addHomeButton();
addConcertStats();