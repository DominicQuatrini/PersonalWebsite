var map = L.map('map');

let bounds = L.latLngBounds();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function concert(artist, venue, tour, date, city, state, price, lat, lng) {
    this.artist = artist;
    this.venue = venue;
    this.tour = tour;
    this.date = date;
    this.city = city;
    this.state = state;
    this.price = price;
    this.lat = lat;
    this.lng = lng;
}

let climatePledgeArenaLat = 47.622238569760036;
let climatePledgeArenaLng = -122.35393044884134;

let tMobileParkLat = 47.591728807371010;
let tMobileParkLng = -122.33254027298267;

let madameLousLat = 47.614626832629284;
let madameLousLng = -122.34911857005739;

let edgefieldManorLat = 45.537422578462255;
let edgefieldManorLng = -122.40711052464210;

let dolbyLiveLat = 36.104155412313524;
let dolbyLiveLng = -115.17503132353661;

let wamuLat = 47.59381721988933;
let wamuLng = -122.332380737562;

let showboxSodoLat = 47.58805586456722;
let showboxSodoLng = -122.33390097738757;

let paramountTheatreLat = 47.613813644437194;
let paramountTheatreLng = -122.33140609789473;

let mooreTheatreLat = 47.61190933244898;
let mooreTheatreLng = -122.34139279260559;

let modaCenterLat = 45.531722872505654;
let modaCenterLng = -122.66684229286913;

let crystalBallroomLat = 45.52315175071015;
let crystalBallroomLng = -122.68484107121779;

let neptuneTheatreLat = 47.66153344483183;
let neptuneTheatreLng = -122.31404495694926;

let crocodileLat = 47.614970147788604;
let crocodileLng = -122.3491493445646;

let gorgeAmphitheatreLat = 47.09992492081298;
let gorgeAmphitheatreLng = -119.99469097865824;

const concerts = [
    new concert("Cigarettes After Sex", "McMenamins Historic Edgefield Manor", "North American Tour 2023", "August 26, 2023", "Troutdale", "OR", 31.20, edgefieldManorLat, edgefieldManorLng),
    new concert("Cigarettes After Sex", "Climate Pledge Arena", "X's World Tour", "September 28, 2024", "Seattle", "WA", 86.05,climatePledgeArenaLat, climatePledgeArenaLng),
    new concert("Omar Apollo, Kevin Abstract", "WAMU Theater", "God Said No Tour", "October 1, 2024", "Seattle", "WA", 64.50, wamuLat, wamuLng),
    new concert("Lamp", "Showbox SoDo", "World Tour FUTURE BEHIND ME North America 2024", "October 7, 2024", "Seattle", "WA", 53.84, showboxSodoLat, showboxSodoLng),
    new concert("Clairo, Alice Phoebe Lou", "Paramount Theatre", "Charm Tour", "October 11, 2024", "Seattle", "WA", 71.31, paramountTheatreLat, paramountTheatreLng),
    new concert("Jordana, Rachel Bobbitt", "Madame Lou's", "Lively Premonition Tour", "February 12, 2025", "Seattle", "WA", 33.07, madameLousLat, madameLousLng),
    new concert("Malcolm Todd, Sophie Gray", "McMenamins Crystal Ballroom", "The Wholesome Rockstar Tour", "June 5, 2025", "Portland", "OR", 40.74, crystalBallroomLat, crystalBallroomLng),
    new concert("grentperez, Rocco", "Showbox SoDo", "Backflips in a Restaurant Tour", "June 8, 2025", "Seattle", "WA", 166.93, showboxSodoLat, showboxSodoLng),
    new concert("The Marías, julie", "WAMU Theater", "Submarine Tour", "July 27, 2025", "Seattle", "WA", 69.07, wamuLat, wamuLng),
    new concert("Hozier, Gigi Perez", "T-Mobile Park", "Unreal Unearth Tour 2025", "August 14, 2025", "Seattle", "WA", 180.10, tMobileParkLat, tMobileParkLng),
    new concert("Bruno Mars", "Dolby Live at Park MGM", "", "August 23, 2025", "Las Vegas", "NV", 1223.25, dolbyLiveLat, dolbyLiveLng),
    new concert("Lord Huron, Kevin Morby", "Climate Pledge Arena", "The Cosmic Selector Tour", "October 18, 2025", "Seattle", "WA", 0, climatePledgeArenaLat, climatePledgeArenaLng),
    new concert("Matt Maltese, Cornelia Murr", "Moore Theatre", "Tour For You My Whole Life", "October 19, 2025", "Seattle", "WA", 27.80, mooreTheatreLat, mooreTheatreLng),
    new concert("sombr", "Moda Center", "The Late Nights Tour", "October 25, 2025", "Portland", "OR", 85.65, modaCenterLat, modaCenterLng),
    new concert("Summer Salt, Boyscott, Wabie", "The Crocodile", "Reside North America Tour", "February 22, 2026", "Seattle", "WA", 51.35, crocodileLat, crocodileLng),
    new concert("Yot Club, Renny Conti", "Neptune Theatre", "Rufus Tour", "June 1, 2026", "Seattle", "WA", 35.60, neptuneTheatreLat, neptuneTheatreLng),
    new concert("Joji, nate sib", "Climate Pledge Arena", "Solaris Tour", "July 19, 2026", "Seattle", "WA", 155.58, climatePledgeArenaLat, climatePledgeArenaLng),
    new concert("YOASOBI", "Climate Pledge Arena", "Never Ending Stories Tour", "August 12, 2026", "Seattle", "WA", 75.15, climatePledgeArenaLat, climatePledgeArenaLng),
    new concert("Not For Radio", "Paramount Theatre", "A Summer In The Forest: North America Tour", "August 14, 2026", "Seattle", "WA", 56.60, paramountTheatreLat, paramountTheatreLng),
    new concert("Daniel Caesar, 070 Shake", "Moda Center", "Son of Spergy Tour", "August 18, 2026", "Portland", "OR", 74.05, modaCenterLat, modaCenterLng),
    new concert("Tame Impala, Dominic Fike", "Climate Pledge Arena", "The Deadbeat Tour", "September 1, 2026", "Seattle", "WA", 127.38, climatePledgeArenaLat, climatePledgeArenaLng),
    new concert("wave to earth", "WAMU Theater", "The Pieces Tour", "September 5, 2026", "Seattle", "WA", 67.15, wamuLat, wamuLng),
    new concert("Jack Johnson", "Gorge Amphitheatre", "Surfilmusic Tour", "September 26, 2026", "George", "WA", 69.68, gorgeAmphitheatreLat, gorgeAmphitheatreLng),
    new concert("The Neighbourhood", "WAMU Theater", "The Wourld Tour", "October 3, 2026", "Seattle", "WA", 176.12, wamuLat, wamuLng),
    new concert("beabadoobee", "Climate Pledge Arena", "The Powerlines Tour", "October 29, 2026", "Seattle", "WA", 100.17, climatePledgeArenaLat, climatePledgeArenaLng)
];

function onMarkerClick(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("Artist(s): " + this.concert.artist + "<br>Venue: " + this.concert.venue + "<br>Tour: " + this.concert.tour + "<br>Date: " + this.concert.date + "<br>City: " + this.concert.city + "<br>State: " + this.concert.state)
        .openOn(map);
    console.log(this);
}

var markerGroup = L.markerClusterGroup({
    // Enable/disable spiderfy at max zoom (default: true)
    spiderfyOnMaxZoom: true, 
    
    // Increase distance of expanded markers from the center (default: 1)
    spiderfyDistanceMultiplier: 1.5, 
    
    // Style the lines connecting the cluster center to the expanded markers
    spiderLegPolylineOptions: { 
        weight: 1.5, 
        color: '#222', 
        opacity: 0.5 
    }
});

for (let i = 0; i < concerts.length; i++) {
    const marker = L.marker([concerts[i].lat, concerts[i].lng]).addTo(markerGroup);
        marker.concert = concerts[i];
    marker.on('click', onMarkerClick);
}

for (let i = 0; i < concerts.length; i++) {
    bounds.extend([concerts[i].lat, concerts[i].lng]);
}

markerGroup.addTo(map);
map.fitBounds(bounds);
