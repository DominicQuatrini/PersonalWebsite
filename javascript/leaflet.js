const map = L.map('map');
const bounds = L.latLngBounds();

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
        const venueID = concert.venue_id; // venues object acts as a dictionary to group concerts by venue_id
        // assign each concert event to its venue group in the venues object for future marker popup display
        if (!venues[venueID]) { // if the venues object encounters a new venue_id, it creates a new object for that venue with its name, coordinates, and an empty concerts array
            venues[venueID] = {
                venue_name: concert.venue_name,
                venue_latitude: concert.venue_latitude,
                venue_longitude: concert.venue_longitude,
                concerts: []
            };
        }
        venues[venueID].concerts.push(concert); // adds the current concert to the concerts array of the corresponding venue object
    }
    console.log("Venues:", venues);
    return venues;
}

function resetMapView() {
    map.flyToBounds(bounds, {duration: 1});
}

function zoomToVenue(venue) {
    map.flyTo([venue.venue_latitude, venue.venue_longitude], 14, {duration: 1});
}

function createVenueMarker(venue) {
    const marker = L.marker([
        venue.venue_latitude,
        venue.venue_longitude
    ]);

    bindMarkerPopup(marker, venue);

    marker.on('click', () => {
        zoomToVenue(venue);
    });

    return marker;
}

function bindMarkerPopup(marker, venue) {
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
}

function addHomeButton() {
    const homeControl = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function () {
        const button = L.DomUtil.create(
            'button',
            'leaflet-bar leaflet-control'
        );

        button.innerHTML = '⌂';
        button.title = 'Reset map view';
        button.type = 'button';

        button.addEventListener('click', resetMapView);

        L.DomEvent.disableClickPropagation(button);

        return button;
    }
    });
    map.addControl(new homeControl());
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