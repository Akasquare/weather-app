import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css"


const SearchBox = () => {
    const apiUrl = process.env.API_URL  
    const apiKey = process.env.API_KEY  
      
    let [city, setCity]= useState("");

    let getWeatherInfo = async ({updateInfo})=>{
        let response =await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        let result = {
            city: city,
            temp : jsonResponse.main.temp,
            minTemp : jsonResponse.main.temp_min,
            maxTemp : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }

    let handleChange = (event)=>{
         
        setCity(event.target.value);

    }

    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city)
        setCity("");
       let info= await getWeatherInfo();
       updateInfo(info)
    }
  return (
    <div className="searchbox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit} action="">
        <TextField id="outlined-basic" onChange={handleChange} value={city} label="City Name" variant="outlined" required />
        <br /><br />
        <Button  variant="contained"    type="submit">Search</Button>
      
      </form>
    </div>
  );
};

export default SearchBox;
