// import React from 'react'

import { Globe } from "../cmps/Globe";
import { FilterCountry } from "../cmps/FilterCountry";
import { countryService } from "../services/countryService";
import React from 'react'
import { SideBar } from '../cmps/SideBar'


export class GlobalApp extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.loadCountries();
  }

  loadCountries = async () => {
    const countries = await countryService.query();
    console.log(countries)
    this.setState({ countries: countries });
  };

  render() {
    return (
        <div>
            <p>GlobalApp</p>
            <SideBar />
            <Globe />
            <FilterCountry />
        </div>
    )
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
