export async function fetchMockData(endpoint) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/mock/data/${endpoint}.json`;

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error(`Error fetching mock data from ${url}:`, err.message);
    return [];
  }
}
