
import {GoogleMap} from '../cmps/GoogleMap'
import React, { useState, useEffect } from 'react'
import { useParams, Route } from 'react-router-dom';

import { countryService } from '../services/countryService'
import { SideBar } from '../cmps/SideBar.jsx'

export function CountryDetails() {

    const { code } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        if (country.code) {return} 
        else {loadCountry(code)}
    });

    async function loadCountry(code) {
        const country = await countryService.loadCountry(code)
        setCountry(country)
    }

    return (
        <div>
            <p>{country.code}</p>
            <p>CountryDetails</p>
            <SideBar />
          <GoogleMap/>
            {/* <SideBar /> */}
        </div>
    )
}
