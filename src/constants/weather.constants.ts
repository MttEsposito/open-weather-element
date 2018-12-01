//App constatnt
const weatherConst = {
    //options for the get location
    positionOptions: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
    //API default for get the weather from http://api.openweathermap.org
    apiDefault:'http://api.openweathermap.org/data/2.5/weather'
};

export { weatherConst };