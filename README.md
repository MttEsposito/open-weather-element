# WeatherElement

Custom element created with Angular for print an element with the data of the weather of the user.
For get the weather conditions i used api from https://openweathermap.org.

# How to use

Step list

1) include in your webpage the script for run the element
  
    <script type="text/javascript" src="element/dist/weather-element.min.js"></script>


2) then put in your HTML the tag 

  {<open-weather apiurl="" apikey="" imageurl="" imageext=""></open-weather>::nomarkdown}
  
  
    2.1) element attribute 

      1) attribute apiurl you can put your custom http url request it must return the https://home.openweathermap.org element
         in the http url it will be added in querystring latitude and longitude 
         
      2) attribute apikey you can put directly the key from https://home.openweathermap.org 
      
      3) attribute imageurl you can put your custom icon for the element 
         you must follow this naming convenction from https://openweathermap.org/weather-conditions
         
      4) attribute imageext here you can decide the extension of the icon you uploaded
      
     
# Example

<img src="https://raw.githubusercontent.com/MttEsposito/open-weather-element/master/src/assets/asset/image/example.PNG"/>

****************** more details will be added later
