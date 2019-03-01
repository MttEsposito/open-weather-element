# WeatherElement

Custom element created with Angular for print an element with the data of the weather of the user.
<br>
For the weather conditions i used api from https://openweathermap.org.

# How to use

Step list

1) include in your website the script for run the element
  
    <script type="text/javascript" src="element/dist/weather-element.min.js"></script>


2) then put in your HTML the tag 

    \<open-weather apiurl="" apikey="" imageurl="" imageext="">\</open-weather>
  
  
## Element attribute 

  * <strong>apiurl:</strong> 
            In this tag you can put your custom http url request.<br>
            The library will add to your HTTP api the latitude and longitude in querystring<br>
            example => 'http://www.mywebsite.com/api/weather?lat=1&lon=1'<br>
            Then in your HTTP code you have to call the api from the website openweather<br>
            example => 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=YOUR-APP-ID-HERE'<br>
            It must return the openweathermap response object.
         
  * <strong>apikey:</strong> In this tag you can put directly the key from https://home.openweathermap.org<br>                  
      
  * <strong>imageurl:</strong>
            In this tag you have to put your URL folder for using custom icon<br> 
            You must follow this naming convenction from https://openweathermap.org/weather-conditions<br>
            example => 'https://raw.githubusercontent.com/MttEsposito/open-weather-element/master/src/assets/asset/icons/'<br>
         
  * <strong>imageext:</strong> 
            In this tag you have to define the extension of the icon you're using<br>
            example => 'svg' or 'jpg' or 'png'<br>
      
     
# Example

<img src="https://raw.githubusercontent.com/MttEsposito/open-weather-element/master/src/assets/asset/image/example.PNG"/>

****************** more details will be added later
