class Weather {
  constructor(city, code) {
    this.city = city;
    this.citycode = code;
  }
  showWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=721ffdb40a8b69a87a4dd5173f2c124d&lang=en`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let image = document.createElement("img");
        image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let temp = document.querySelector(
          `.departure-info__temp--${this.citycode}`
        );
        temp.innerHTML = `${(data.main.temp - 273.15).toFixed(0)} &#x2103`;
        temp.style.fontSize = "1.2rem";
        temp.style.color = "#21a795";
        document
          .querySelector(`.departure-info__wx--${this.citycode}`)
          .appendChild(image);
        let wx = document.querySelector(`.wx__description--${this.citycode}`);
        wx.innerHTML = `${data.weather[0].description}`;
        wx.style.fontSize = "1.2rem";
        wx.style.color = "#21a795";
      });
  }
}

export const larnacaWx = new Weather("Larnaca", "lca").showWeather();
export const paphosWx = new Weather("Paphos", "pfo").showWeather();
