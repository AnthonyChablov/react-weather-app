let SingleDayWeatherData = {
    coord: {
      lon: -79.4163,
      lat: 43.7001
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: 'clear sky',
        icon: "03d"
      }
    ],
    base: "stations",
    main: {
      temp: 304.15,
      feels_like: 308,
      temp_min: 300.64,
      temp_max: 305.46,
      pressure: 1008,
      humidity: 60
    },
    visibility: 10000,
    wind: {
      speed: 3.6,
      deg: 290,
      gust: 9.26
    },
    clouds: {
      all: 40
    },
    dt: 1658248348,
    sys: {
      type: 2,
      id: 2043365,
      country: "CA",
      sunrise: 1658224395,
      sunset: 1658278457
    },
    timezone: -14400,
    id: 6167865,
    name: "Toronto",
    cod: 200
}

export {SingleDayWeatherData};