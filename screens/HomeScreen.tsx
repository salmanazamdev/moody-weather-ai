import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetch15DayForecast } from '../api/weatherService';
import { getWeatherMood } from '../utils/getWeatherMood';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [today, setToday] = useState<{
    date: string;
    temp: number;
    code: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      const data = await fetch15DayForecast(33.738045, 73.084488); // Islamabad
      if (data) {
        setToday({
          date: data.time[0],
          temp: data.temperature_2m_max[0],
          code: data.weathercode[0],
        });
      }
      setLoading(false);
    }
    loadWeather();
  }, []);

  if (loading || !today) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading weather...</Text>
      </View>
    );
  }

  const mood = getWeatherMood(today.code, today.temp);

  return (
    <ImageBackground
      source={{ uri: mood.background }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.city}>📍 Islamabad</Text>
        <Text style={styles.heading}>Mosam ka kya mood hai?</Text>
        <Text style={styles.emoji}>{mood.emoji}</Text>
        <Text style={styles.message}>{mood.text}</Text>
        <Text style={styles.temp}>Temp: {today.temp}°C</Text>
        <Text style={styles.date}>Date: {today.date}</Text>

        <View style={{ marginTop: 40 }}>
          <Button
            title="View 15-Day Forecast"
            onPress={() => navigation.navigate('Forecast')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  city: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 70,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 50,
  },
  temp: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#eee',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
