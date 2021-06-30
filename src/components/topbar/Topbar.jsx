import React from 'react'
import "./topbar.css"
import {NotificationsIcon} from '@material-ui/icons/Notifications';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo" >BlueNight</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
