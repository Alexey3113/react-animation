import React from 'react'
import {HashRouter, Switch, Route, BrowserRouter} from "react-router-dom"
import {About, Settings, Main, NotFound, DataList} from "../pages"
import {allPaths as paths} from "../constants"
import { Navbar } from '../components'

export const Routing = () => {
    return (
        <div>            
            <HashRouter >
                <Navbar />
                <Switch>
                    <Route path={paths.main} exact>
                        <Main /> 
                    </Route>
                    <Route path={paths.about} >
                        <About />
                    </Route>
                    <Route path={paths.dataList} >
                        <DataList />
                    </Route>    
                    <Route path={paths.settings} >
                        <Settings />
                    </Route>                    
                                    
                        <NotFound />
                </Switch>
            </HashRouter>
        </div>
    )
}

