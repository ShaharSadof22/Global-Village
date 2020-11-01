

import { Globe } from "../cmps/Globe";
import { FilterCountry } from "../cmps/FilterCountry";
import { countryService } from "../services/countryService";
import React,{Component} from 'react'
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
            {/* <SideBar /> */}
            <Globe />
            {/* <FilterCountry /> */}
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
