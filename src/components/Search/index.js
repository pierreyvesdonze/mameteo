import React, { useState,useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [city, setCity] = useState([]);

    const cityItem = [
        {
            'day': '0',
            'gust10m': '25',
            'probafog': '0',
            'probafrost': '0',
            'probarain': '0',
            'probawind70': '0',
            'tmax': '26',
            'tmin': '15',
            'sunHours': '16'
        }
    ]

    // useEffect(() => {
    //     axios
    //         .get(`https://api.meteo-concept.com/api/forecast/daily?token=b61171b12c0cdb65828d68c03c5752ca05c3a5629d119d8c8b89441ed64de0f1&insee=54395`)
    //         .then((response) => {
    //             setCity(response.data)
    //             console.log(response.data)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, []);

    return (
        <>
            <h1>Prévisions à Nancy</h1>
            {/* {city.forecast && city.forecast.map && city.forecast.map((cityItem) => (
                <p>
                    {cityItem.gust10m}
                  
                </p>
            ))} */}
  
        </>
    );
}


export default Search;
