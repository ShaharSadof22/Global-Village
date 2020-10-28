import React from 'react'

import {Globe} from '../cmps/Globe'
import {FilterCountry} from '../cmps/FilterCountry'

export function GlobalApp() {
    return (
        <div>
            <p>GlobalApp</p>
            <Globe />
            <FilterCountry />
        </div>
    )
}
