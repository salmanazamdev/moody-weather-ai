import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { fetch15DayForecast } from '../api/weatherService';

export default function ForecastScreen() {
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await fetch15DayForecast(33.738045, 73.084488); // Islamabad coords
      setForecast(data);
      setLoading(false);
    }

    getData();
  }, []);

  if (loading || !forecast) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading forecast...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={forecast.time}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ padding: 20 }}
      renderItem={({ item, index }) => (
        <View style={styles.card}>
          <Text style={styles.date}>{item}</Text>
          <Text>🌡️ Max: {forecast.temperature_2m_max[index]}°C</Text>
          <Text>❄️ Min: {forecast.temperature_2m_min[index]}°C</Text>
          <Text>🌧️ Rain: {forecast.precipitation_sum[index]} mm</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#eaf6ff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
// This code defines the ForecastScreen component for a weather app.
// It fetches a 15-day weather forecast for Islamabad and displays it in a list format