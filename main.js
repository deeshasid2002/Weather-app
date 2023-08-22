const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9bdd63c14msh687aeeb70e40bbcp1c0590jsnce0e87cf1587',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

var getWeather = (city)=> {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	getWeather(city.value)
})

getWeather("Mumbai")


let getWeatherbyId = (delhi) =>
{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		delhi__cloud_pct.innerHTML = response.cloud_pct
		delhi__feels_like.innerHTML = response.feels_like
		delhi__humidity.innerHTML = response.humidity
		delhi__max_temp.innerHTML = response.max_temp
		delhi__min_temp.innerHTML = response.min_temp
		delhi__sunrise.innerHTML = response.sunrise
		delhi__sunset.innerHTML = response.sunset
		delhi__temp.innerHTML = response.temp
		delhi__wind_degrees.innerHTML = response.wind_degrees
		delhi__wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}

getWeatherbyId("Delhi")





let getWeatherbyId1 = (pune) =>
{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		pune__cloud_pct.innerHTML = response.cloud_pct
		pune__feels_like.innerHTML = response.feels_like
		pune__humidity.innerHTML = response.humidity
		pune__max_temp.innerHTML = response.max_temp
		pune__min_temp.innerHTML = response.min_temp
		pune__sunrise.innerHTML = response.sunrise
		pune__sunset.innerHTML = response.sunset
		pune__temp.innerHTML = response.temp
		pune__wind_degrees.innerHTML = response.wind_degrees
		pune__wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}

getWeatherbyId1("pune")







let getWeatherbyId2 = (thane) =>
{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=thane', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		thane__cloud_pct.innerHTML = response.cloud_pct
		thane__feels_like.innerHTML = response.feels_like
		thane__humidity.innerHTML = response.humidity
		thane__max_temp.innerHTML = response.max_temp
		thane__min_temp.innerHTML = response.min_temp
		thane__sunrise.innerHTML = response.sunrise
		thane__sunset.innerHTML = response.sunset
		thane__temp.innerHTML = response.temp
		thane__wind_degrees.innerHTML = response.wind_degrees
		thane__wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}

getWeatherbyId2("thane")





let getWeatherbyId3 = (kolkata) =>
{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		kolkata__cloud_pct.innerHTML = response.cloud_pct
		kolkata__feels_like.innerHTML = response.feels_like
		kolkata__humidity.innerHTML = response.humidity
		kolkata__max_temp.innerHTML = response.max_temp
		kolkata__min_temp.innerHTML = response.min_temp
		kolkata__sunrise.innerHTML = response.sunrise
		kolkata__sunset.innerHTML = response.sunset
		kolkata__temp.innerHTML = response.temp
		kolkata__wind_degrees.innerHTML = response.wind_degrees
		kolkata__wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
}

getWeatherbyId3("kolkata")

















