import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const Search = () => {
    const [city, setCity] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.meteo-concept.com/api/forecast/daily?token=b61171b12c0cdb65828d68c03c5752ca05c3a5629d119d8c8b89441ed64de0f1&insee=54395`)
            .then((response) => {
                setCity(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    // add a day
    var date = moment();
    
    return (
        <div className="main-meteo-container">
            <h1 className="main-title">Nancy</h1>
            {city.forecast && city.forecast.map && city.forecast.map((cityItem) => (
                <div key={cityItem.day}>
                    <div className="flex-left-right" >
                        <div className="flex-left">
                            <h2>
                                {
                                    moment(date).add(cityItem.day, 'days').format("Do MMM YYYY")
                                }
                            </h2>
                            <h3 className="temperature">
                                {cityItem.tmax}° - {cityItem.tmin}°
                            </h3>
                            <p>Probabilité de pluie : {cityItem.probarain}%</p>
                        </div>
                        <div className="left-right">

                            {/* TODO : more redeable code*/}
                            {cityItem.weather === 0 ? (
                                <img src={require('./images/sun.png')} alt="meteo-img" className="meteo-img" />
                            ) : ''
                            }

                            {cityItem.weather >= 1 && cityItem.weather <= 5 ? (
                                <img src={require('./images/cloud.png')} alt="meteo-img" className="meteo-img" />
                            ) : ''
                            }

                            {cityItem.weather >= 6 && cityItem.weather <= 7 ? (
                                <img src={require('./images/fog.png')} alt="meteo-img" className="meteo-img" />
                            ) : ''
                            }

                            {
                                (cityItem.weather >= 10 && cityItem.weather <= 16) ||
                                    (cityItem.weather >= 30 && cityItem.weather <= 48)
                                    ? (
                                        <img src={require('./images/cloud-rain.png')} alt="meteo-img" className="meteo-img" />
                                    ) : ''
                            }

                            {
                                (cityItem.weather >= 20 && cityItem.weather <= 22) ||
                                    (cityItem.weather >= 60 && cityItem.weather <= 78)
                                    ? (
                                        <img src={require('./images/snow.png')} alt="meteo-img" className="meteo-img" />
                                    ) : ''
                            }

                            {cityItem.weather >= 100 && cityItem.weather <= 142 ? (
                                <img src={require('./images/cloud-storm.png')} alt="meteo-img" className="meteo-img" />
                            ) : ''
                            }
                        </div>
                        {/* <SimpleBackdrop /> */}
                    </div>

                    <hr className="hr-white" />
                </div>
            ))
            }
        </div >
    );
}


export default Search;
