export default async function handler(req, res) {
  const url = "https://www.airbnb.es/calendar/ical/1626656279283235970.ics?t=a2869396ad1148ada8dadd28226882e5";

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/calendar"
      }
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/calendar");

    res.status(200).send(text);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener calendario" });
  }
}