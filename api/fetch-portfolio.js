const portfolioJsonUrl = process.env.PORTFOLIO_JSON_URL;

export default async function handler(req, res) {
  try {
    // Fetch data from the remote JSON URL
    const response = await fetch(portfolioJsonUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching profile JSON: ', error);
    res.status(500).json({ message: 'Failed to fetch profile JSON: ' + error });
  }
}
