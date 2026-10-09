CREATE TABLE artists (
    artist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_name TEXT NOT NULL UNIQUE
);

CREATE TABLE venues (
    venue_id INTEGER PRIMARY KEY AUTOINCREMENT,
    venue_name TEXT NOT NULL,
    venue_latitude REAL NOT NULL,
    venue_longitude REAL NOT NULL,

    UNIQUE(venue_name, venue_latitude, venue_longitude)
);

CREATE TABLE concerts (
    concert_id INTEGER PRIMARY KEY AUTOINCREMENT,
    concert_date DATE NOT NULL,
    ticket_price REAL,
    tour_name TEXT,
    venue_id INTEGER NOT NULL,

    FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

CREATE TABLE concert_artists (
    concert_id INTEGER NOT NULL,
    artist_id INTEGER NOT NULL,
    artist_role TEXT NOT NULL,

    PRIMARY KEY (concert_id, artist_id),
    FOREIGN KEY (concert_id) REFERENCES concerts(concert_id) ON DELETE CASCADE,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE
);

INSERT INTO artists (artist_name) VALUES
("Cigarettes After Sex"),
("Omar Apollo"),
("Kevin Abstract"),
("Lamp"),
("Clairo"),
("Alice Phoebe Lou"),
("Jordana"),
("Rachel Bobbitt"),
("Malcolm Todd"),
("Sophie Gray"),
("grentperez"),
("Rocco"),
("The Marías"),
("julie"),
("Hozier"),
("Gigi Perez"),
("Bruno Mars"),
("Lord Huron"),
("Kevin Morby"),
("Matt Maltese"),
("Cornelia Murr"),
("sombr"),
("Summer Salt"),
("Boyscott"),
("Wabie"),
("Yot Club"),
("Renny Conti"),
("Joji"),
("Corbin"),
("nate sib"),
("YOASOBI"),
("Not For Radio"),
("Daniel Caesar"),
("070 Shake"),
("Tame Impala"),
("Dominic Fike"),
("wave to earth"),
("Jack Johnson"),
("The Neighbourhood"),
("beabadoobee");

INSERT INTO venues (venue_name, venue_latitude, venue_longitude) VALUES
("Climate Pledge Arena", 47.622238569760036, -122.35393044884134),
("T-Mobile Park", 47.591728807371010, -122.33254027298267),
("Madame Lou's", 47.614626832629284, -122.34911857005739),
("McMenamins Historic Edgefield Manor", 45.537422578462255, -122.40711052464210),
("Dolby Live at Park MGM", 36.104155412313524, -115.17503132353661),
("WAMU Theater", 47.59381721988933, -122.332380737562),
("Showbox SoDo", 47.58805586456722, -122.33390097738757),
("Paramount Theatre", 47.613813644437194, -122.33140609789473),
("Moore Theatre", 47.61190933244898, -122.34139279260559),
("Moda Center", 45.531722872505654, -122.66684229286913),
("McMenamins Crystal Ballroom", 45.52315175071015, -122.68484107121779),
("Neptune Theatre", 47.66153344483183, -122.31404495694926),
("The Crocodile", 47.614970147788604, -122.3491493445646),
("Gorge Amphitheatre", 47.09992492081298, -119.99469097865824);

INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2023-08-26", 31.20, "North American Tour 2023", 4),
("2024-09-28", 86.05, "X's World Tour", 1),
("2024-10-01", 64.50, "God Said No Tour", 6),
("2024-10-07", 53.84, "World Tour FUTURE BEHIND ME North America 2024", 7),
("2024-10-11", 71.31, "Charm Tour", 8),
("2025-02-12", 33.07, "Lively Premonition Tour", 3),
("2025-06-05", 40.74, "The Wholesome Rockstar Tour", 11),
("2025-06-08", 166.93, "Backflips in a Restaurant Tour", 7),
("2025-07-27", 69.07, "Submarine Tour", 6),
("2025-08-14", 180.10, "Unreal Unearth Tour 2025", 2),
("2025-08-23", 1223.25, NULL, 5),
("2025-10-18", NULL, "The Cosmic Selector Tour", 1),
("2025-10-19", 27.80, "Tour For You My Whole Life", 9),
("2025-10-25", 85.65, "The Late Nights Tour", 10),
("2026-02-22", 51.35, "Reside North America Tour", 13),
("2026-06-01", 35.60, "Rufus Tour", 12),
("2026-07-19", 155.58, "Solaris Tour", 1),
("2026-08-12", 75.15, "Never Ending Stories Tour", 1),
("2026-08-14", 56.60, "A Summer In The Forest: North America Tour", 8),
("2026-08-18", 74.05, "Son of Spergy Tour", 10),
("2026-09-01", 127.38, "The Deadbeat Tour", 1),
("2026-09-05", 67.15, "The Pieces Tour", 6),
("2026-09-26", 69.68, "Surfilmusic Tour", 14),
("2026-10-03", 176.12, "The Wourld Tour", 6),
("2026-10-29", 100.17, "The Powerlines Tour", 1);

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(1, 1, "headliner"),
(2, 1, "headliner"),
(3, 2, "headliner"),
(3, 3, "opener"),
(4, 4, "headliner"),
(5, 5, "headliner"),
(5, 6, "opener"),
(6, 7, "headliner"),
(6, 8, "opener"),
(7, 9, "headliner"),
(7, 10, "opener"),
(8, 11, "headliner"),
(8, 12, "opener"),
(9, 13, "headliner"),
(9, 14, "opener"),
(10, 15, "headliner"),
(10, 16, "opener"),
(11, 17, "headliner"),
(12, 18, "headliner"),
(12, 19, "opener"),
(13, 20, "headliner"),
(13, 21, "opener"),
(14, 22, "headliner"),
(15, 23, "headliner"),
(15, 24, "opener"),
(15, 25, "opener"),
(16, 26, "headliner"),
(16, 27, "opener"),
(17, 28, "headliner"),
(17, 29, "opener"),
(17, 30, "opener"),
(18, 31, "headliner"),
(19, 32, "headliner"),
(20, 33, "headliner"),
(20, 34, "opener"),
(21, 35, "headliner"),
(21, 36, "opener"),
(22, 37, "headliner"),
(23, 38, "headliner"),
(24, 39, "headliner"),
(25, 40, "headliner");

-- Noah Kahan ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-08-30", 69.35, "The Great Divide Tour", 2);

INSERT INTO artists (artist_name) VALUES
("Noah Kahan"),
("Annabelle Dinda");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(26, 41, "headliner"),
(26, 42, "opener"),
(26, 16, "opener");

-- ROLE MODEL ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-09-11", 57.5, "CHUCK ON TOUR", 6);

INSERT INTO artists (artist_name) VALUES
("Samia"),
("ROLE MODEL");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(27, 44, "headliner"),
(27, 43, "opener");

-- Phoebe Bridgers ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-10-23", 224.25, "The Lost Tour", 1);

INSERT INTO artists (artist_name) VALUES
("Phoebe Bridgers"),
("Alex G");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(28, 45, "headliner"),
(28, 46, "opener");

-- greek ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-09-14", 35.43, null, 15);

INSERT INTO artists (artist_name) VALUES
("greek");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(30, 48, "headliner");

-- Vansire ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-11-10", 35.94, null, 15);

INSERT INTO artists (artist_name) VALUES
("Vansire");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(31, 49, "headliner");

-- Almost Monday ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2026-10-16", 35.6, "THANK GOD IT'S ALMOST MONDAY", 12);

INSERT INTO artists (artist_name) VALUES
("Almost Monday");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(29, 47, "headliner");

-- Lord Huron ----------------------------------------------------------------------------------------
INSERT INTO concerts (concert_date, ticket_price, tour_name, venue_id) VALUES
("2027-01-07", 123.9, "An Evening with Lord Huron", 8);

INSERT INTO artists (artist_name) VALUES
("Lord Huron");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(32, 18, "headliner");

-- Madam Lou's/The Crocodile Reconstruct ----------------------------------------------------------------------------------------
DELETE FROM concerts WHERE concert_id=6; -- delete Jordana's concert at Madame Lou's

DELETE FROM venues WHERE venue_id=3; -- delete Madame Lou's

UPDATE venues SET venue_name="Madame Lou's / The Crocodile" WHERE venue_id=13; -- change The Crocodile's name to include Madame Lou's

INSERT INTO concerts (concert_id,concert_date, ticket_price, tour_name, venue_id) VALUES
(6, "2025-02-12", 33.07, "Lively Premonition Tour", 13); -- reinsert Jordana's concert at the new venue

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(6, 7, "headliner"),
(6, 8, "opener"); -- reinsert Jordana's concert artists at the new venue

-- sombr tour update ----------------------------------------------------------------------------------------
UPDATE concerts SET tour_name="The Late Nights & Young Romance Tour" WHERE concert_id=14;

-- greek tour update ----------------------------------------------------------------------------------------
UPDATE concerts SET tour_name="greek! live" WHERE concert_id=30;

INSERT INTO artists (artist_name) VALUES
("Humble the Great");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(30, 56, "opener");

-- Jack Johnson tour update ----------------------------------------------------------------------------------------
INSERT INTO artists (artist_name) VALUES
("Hermanos Gutierrez"),
("G. Love");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(23, 50, "opener"),
(23, 51, "opener");

-- beabadoobee tour update ----------------------------------------------------------------------------------------
INSERT INTO artists (artist_name) VALUES
("Wisp");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(25, 52, "opener");

-- Almost Monday tour update ----------------------------------------------------------------------------------------
INSERT INTO artists (artist_name) VALUES
("Sun Room");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(29, 53, "opener");

-- Omar Apollo tour update ----------------------------------------------------------------------------------------
UPDATE concerts SET tour_name="God Said No World Tour" WHERE concert_id=3;

-- The Marias tour update ----------------------------------------------------------------------------------------
UPDATE concerts SET tour_name="The Submarine Tour (Extended)" WHERE concert_id=9;

-- The Neighbourhood tour update ----------------------------------------------------------------------------------------
INSERT INTO artists (artist_name) VALUES
("After"),
("Noise Dept.");

INSERT INTO concert_artists (concert_id, artist_id, artist_role) VALUES
(24, 54, "opener"),
(24, 55, "opener");

-- Not for Radio tour update ----------------------------------------------------------------------------------------
UPDATE concerts SET concert_date="2026-11-12" WHERE concert_id=19;

----------------------------------------------------------------------------------------
SELECT a.artist_id, a.artist_name, ca.artist_role, c.concert_id, c.tour_name, c.concert_date FROM artists a
JOIN concert_artists ca ON a.artist_id = ca.artist_id
JOIN concerts c ON ca.concert_id = c.concert_id
JOIN venues v ON c.venue_id = v.venue_id
ORDER BY c.concert_date;
