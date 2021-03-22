import React from 'react'

import {useDispatch} from "react-redux"
import { setProfile } from '../../redux/profile/actions';

import "./style.scss"

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        const profile = {
            name: form["firstName"].value,
            "second-name": form["secondName"].value
        };
        dispatch(setProfile(profile));
        form["firstName"].value = '';
        form["secondName"].value = '';
    };
    // const 

    return (
        <div>
            <form action="" className="popup" onSubmit={handleSubmit}>
                <div className="field"><input type="text" name="firstName" placeholder="Name" /></div>
                <div className="field"><input type="text" name="secondName" placeholder="secondName" /></div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}


