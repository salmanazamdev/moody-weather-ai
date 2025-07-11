// api/weatherService.ts

export async function fetch15DayForecast(lat: number, lon: number) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&forecast_days=15&timezone=auto`;

  try {
    const response = await fetch(apiUrl);

    // Check if response is okay
    if (!response.ok) {
      console.error('API Response Not OK:', response.status);
      alert(`API failed with status ${response.status}`);
      return null;
    }

    const data = await response.json();

    // Log what the API returned
    console.log('✅ API Data:', data);

    return data.daily; // return only the useful part of the data
  } catch (error: any) {
    // Catch any error and show a popup
    console.error('❌ Fetch Error:', error.message || error);
    alert('Fetch failed: ' + (error.message || error));
    return null;
  }
}
