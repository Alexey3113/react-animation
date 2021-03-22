import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import {About, Settings, Main, NotFound, DataList} from "../pages"
import {allPaths as paths} from "../constants"
import { Navbar } from '../components'

export const Routing = () => {
    return (
        <div>            
            <Router >
                <Navbar />
                <Switch>
                    <Route path={paths.main} exact>
                        <Main /> 
                    </Route>
                    <Route path={paths.about} exact>
                        <About />
                    </Route>
                    <Route path={paths.dataList} exact>
                        <DataList />
                    </Route>    
                    <Route path={paths.settings} exact>
                        <Settings />
                    </Route>                    
                                    
                        <NotFound />
                </Switch>
            </Router>
        </div>
    )
}

