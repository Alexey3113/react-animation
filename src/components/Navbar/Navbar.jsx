import React from "react";
import {useHistory } from "react-router";
import {useDispatch} from "react-redux"

import "./style.scss";

import { allPaths as paths } from "../../constants";
import { setAnimation } from "../../redux/animation/actions";

export const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch()


    const handleClickLink = (path) => (event) => {
        event.preventDefault();
        dispatch(setAnimation(true))

        const animateTimeout = setTimeout(() => {
            dispatch(setAnimation(false))
            history.push(path);
            clearTimeout(animateTimeout);
        }, 700);

    }

    return (
        <div className="navbar">
            <a className="navbar-link" href="/#" onClick={handleClickLink(paths.main)}>Главная</a>
            <a className="navbar-link" href="/#" onClick={handleClickLink(paths.about)}>О нас</a>
            <a className="navbar-link" href="/#" onClick={handleClickLink(paths.settings)}>Настройки</a>
            <a className="navbar-link" href="/#" onClick={handleClickLink(paths.dataList)}>Данные</a>
        </div>
    )
}