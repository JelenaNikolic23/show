import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShowsPage from "./components/Shows/ShowPage";
import ShowDetailsPage from "./components/Shows/ShowDetailsPage";


const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={ShowsPage} />
            <Route path="/show/:id" component={ShowDetailsPage} />
            {/*<Route path="/about" component={AboutPage} />*/}
        </Switch>
    </main>
)

export default Main
