import React from 'react'
import {TextField} from '@material-ui/core'

export function SideBar() {
    return (
        <div className="side-bar">
            <form action="">
            <TextField id="outlined-basic" label="Search" variant="outlined" placeholder="enter country name" />
            </form>
            <ul>
                <li href="#general-stats">General Stats</li>
                <li href="#fun-facts">Fun Facts</li>
                <li href="#cost-of-living">Cost of Living</li>
                <li href="#economy">Economy</li>
                <li href="#education">Education</li>
                <li href="#security">Security</li>
                <li href="#politics">Politics</li>
                <li href="#health">Health</li>
                <li href="#weather">Weather</li>
                <li href="#reviews">Expats Reviews</li>
                <li href="#ranking">GV Ranking</li>
            </ul>
        </div>
    )
}
