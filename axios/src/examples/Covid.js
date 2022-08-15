import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const options = {
    method: 'GET',
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
    params: {country: 'Canada'},
    headers: {
      'X-RapidAPI-Key': '7aff524addmsh227f4e8defb1312p197734jsn7d0106b266ce',
      'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
    }
  };

function Covid() {

    const [covidData , setCovidData] = useState({deaths:0,corfirmed:0})
    useEffect( () => {
        axios.request(options).then(function (response) {
            setCovidData({deaths:response.data.data.deaths , corfirmed:response.data.data.confirmed})
        }).catch(function (error) {
            console.error(error);
        });
    } , [] )

  return (
    <div>
        <div>Corfirmed cases  :- {covidData.corfirmed}</div>
        <div>deaths :-  {covidData.deaths}</div>
    </div>
  )
}

export default Covid