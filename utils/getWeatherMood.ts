// utils/getWeatherMood.ts

export function getWeatherMood(code: number, temp: number): {
  emoji: string;
  text: string;
  background: string;
} {
  if (temp > 38) {
    return {
      emoji: "🔥",
      text: "It’s burning outside! Only Ganey Ka Juice can save us!",
      background: "https://i.pinimg.com/736x/3a/b0/c9/3ab0c96b34620d2fcbcbf86901ac2b1f.jpg", // hot sun
    };
  }

  if (code === 61 || code === 63) {
    return {
      emoji: "🌧️",
      text: "Rainy day! Grab an umbrella ☔",
      background: "https://i.pinimg.com/736x/c0/8f/ff/c08fff9611efaa2199da46528ee71b68.jpg", // rain
    };
  }

  if (code === 0) {
    return {
      emoji: "☀️",
      text: "Clear skies, matlab mahool perfect for chai shai ☕",
      background: "https://i.pinimg.com/1200x/38/43/20/384320df720e02260e35644a741af91f.jpg", // sunny
    };
  }

  if (temp < 10) {
    return {
      emoji: "❄️",
      text: "Too cold. Hoodie + Chai + Shawl recommended!",
      background: "https://i.pinimg.com/736x/4a/e8/c9/4ae8c95aaf54ce91f1bce3f2fd63e56d.jpg", // cold snowy
    };
  }

  return {
    emoji: "🤔",
    text: "Weather's confused: Garmi hai ya Sardi, pata nhi chal rha hai!",
    background: "https://i.pinimg.com/736x/01/29/c3/0129c3f782a0afc64124141fdc3a1837.jpg", // neutral
  };
}
