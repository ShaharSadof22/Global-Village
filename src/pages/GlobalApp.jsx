

import { Globe } from "../cmps/Globe";
import { FilterCountry } from "../cmps/FilterCountry";
import { countryService } from "../services/countryService";
import React, { Component } from 'react'



export class GlobalApp extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.loadCountries();
  }

  loadCountries = async () => {
    const countries = await countryService.query();
    this.setState({ countries: countries });
  };

  render() {
    return (
      <div>
        
        {/* <FilterCountry /> */}
        <Globe />
      </div>
    )
  }
}
// export function GlobalApp() {

//     return (

//         <div>
//             <p>GlobalApp</p>
//             <Globe />
//             <FilterCountry />
//         </div>
//     )
// }
