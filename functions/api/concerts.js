export async function onRequest(context) { // server-side API endpoint and Cloudflare Function that allows D1 to communicate with user's browser when fetching concert data for leaflet.js map
    const queryResults = await context.env.DB.prepare(`
        SELECT
            c.concert_id, c.concert_date, c.ticket_price, c.tour_name,
            v.venue_id, v.venue_name, v.venue_latitude, v.venue_longitude,
            (
                SELECT GROUP_CONCAT(a.artist_name, ', ') AS artists -- combines opener(s) and headliner into single string
                ORDER BY a.artist_role DESC
            )
        FROM concerts c
        JOIN venues v ON c.venue_id = v.venue_id
        JOIN concert_artists ca ON c.concert_id = ca.concert_id
        JOIN artists a ON ca.artist_id = a.artist_id
        GROUP BY c.concert_id
    `).all();

    return Response.json(queryResults.results);
};