export async function onRequest(context) {
    const { env } = context;

    const { results } = await env.DB.prepare(`
        SELECT
            c.concert_id,
            c.concert_date,
            c.ticket_price,
            c.tour_name,
            v.venue_name,
            v.venue_latitude,
            v.venue_longitude,
            GROUP_CONCAT(a.artist_name) AS artists
        FROM concerts c
        JOIN venues v
            ON c.venue_id = v.venue_id
        JOIN concert_artists ca
            ON c.concert_id = ca.concert_id
        JOIN artists a
            ON ca.artist_id = a.artist_id
        GROUP BY c.concert_id
    `).all();

    return Response.json(results);
};