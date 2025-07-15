# 🌦️ Moody Weather AI — React Native Weather App

**"Mosam ka kya mood hai?"**  
An expressive and modern mobile weather app that goes beyond just temperature — it gives you the **vibe** of the weather 😎

---

## 🧠 Features

- 📍 Shows weather for **Islamabad** with emoji and mood message
- 🧠 Uses Open-Meteo API to fetch 15-day forecast
- 📅 View full forecast with 1 tap
- 📷 Dynamic **background image** based on the weather
- 🎭 Mood-based **emoji + message** based on temperature & weather condition
- 📱 Built with **React Native**, **Expo**, and **TypeScript**

---

## ✨ Screens

| HomeScreen | ForecastScreen |
|------------|----------------|
| ![Home](https://via.placeholder.com/200x400.png?text=Weather+Mood+Screen) | ![Forecast](https://via.placeholder.com/200x400.png?text=15+Day+Forecast) |

---

## 📂 Folder Structure

```

moody-weather-ai/
├── App.tsx
├── /screens
│   ├── HomeScreen.tsx        # Today's weather mood
│   └── ForecastScreen.tsx    # Full 15-day forecast
├── /api
│   └── weatherService.ts     # Open-Meteo API call logic
├── /utils
│   └── getWeatherMood.ts     # Converts weather → mood + emoji + image
├── /assets                   # (optional) icons/fonts/images

````

---

## 🌐 API

- Open-Meteo (Free, No API Key Needed)  
  [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/salmanazamdev/moody-weather-ai

# Go to project folder
cd moody-weather-ai

# Install dependencies
npm install

# Start Expo server
npx expo start
````

---

## 💡 Future Ideas

* 📍 Add location search or use device GPS
* 🌙 Dark mode with auto theme
* 🎥 Background videos (animated weather)
* 🌐 Urdu/English language switcher

---

## 🙌 Made By

**Salman Azam** 🌤️

> Follow me on [LinkedIn](https://www.linkedin.com/in/salmanazamdev)
> Project inspired by a class task that turned into something 🔥
