export async function onRequest(context) { // server-side API endpoint and Cloudflare Function that allows D1 to communicate with user's browser when fetching concert data for leaflet.js map
    const queryResults = await context.env.DB.prepare(`
        SELECT
            c.concert_id, c.concert_date, c.ticket_price, c.tour_name,
            v.venue_id, v.venue_name, v.venue_latitude, v.venue_longitude,
            (
                SELECT GROUP_CONCAT(a.artist_name, ', ')
                FROM concert_artists ca
                JOIN artists a ON ca.artist_id = a.artist_id
                WHERE ca.concert_id = c.concert_id
                ORDER BY ca.artist_role ASC LIMIT -1
            ) AS artists
        FROM concerts c
        JOIN venues v ON c.venue_id = v.venue_id
    `).all();

    return Response.json(queryResults.results);
};