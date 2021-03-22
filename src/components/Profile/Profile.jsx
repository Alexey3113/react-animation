import React from 'react';

import {useSelector} from "react-redux";

import "./style.scss"

export const Profile = () => {
    const {profile} = useSelector((state) => state.profile);

    return (
        <div className="profile" >
            {profile ? <h1>{profile.name && profile.name} {profile["second-name"] && profile["second-name"]}</h1>  : <h1>Данных нет</h1>}
        </div>
    )
}
