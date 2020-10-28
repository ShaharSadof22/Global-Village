import React from 'react'
import { Globe } from '../cmps/Globe'
import { FilterCountry } from '../cmps/FilterCountry'
import { SideBar } from '../cmps/SideBar'

export function GlobalApp() {
    return (
        <div>
            <p>GlobalApp</p>
            <SideBar />
            <Globe />
            <FilterCountry />
        </div>
    )
}
