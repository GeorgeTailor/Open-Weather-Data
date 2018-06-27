# OpenWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

The project definitely works with:
npm -v
6.1.0

node -v
v10.5.0

ng -v
Angular CLI: 6.0.8
Node: 10.5.0
OS: win32 x64
Angular: 6.0.6

## Development server

To run the project run 

> npm install

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Due to prototype nature of the project tests were omitted.

## Project description

Project consists of several angular modules which are lazy loaded. Modules like 'Maps', 'Historical Data' and 'Favorites' exist only to fill the space in the menu :)


### Modules

#### Weather
Weather module holds small widget components with weather data for 5 predefined cities and additionally one which is determined using user's geolocation data (if the user grants such permission to the web app).
After clicking on any widget the user should be redirected to the forecast view, where the same widgets are used, but with different data.
There are two ways to view the data, plain text in widgets or a chart with temperature, wind etc.

#### Weather v2
Weather v2 is a module which uses the same API but presents the data in a slightly different way. The widgets are bigger and are wrapper in a carousel. The forecast should pop-up from below the widget after clicking 'Forecast' button.

#### Contact Us
Super simple form with some basic validation. Uses separate reusable module `inputs-module` which exports inputs, textareas etc.

### UI
App theme can be changed by clicking three specific buttons under the main left menu.
