import Controller from './controller';

window.onload = () => {
  Controller.startWeatherApp();
};

window.displaySearch = () => {
  Controller.toogleAnimation();
};

window.getCity = () => {
  Controller.getData();
};

window.switchToImperial = () => {
  Controller.switchtoFarenheit();
};

window.switchToMetric = () => {
  Controller.switchtoCelsius();
};