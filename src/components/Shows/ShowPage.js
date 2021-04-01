import React, { Component } from 'react'
import _ from 'lodash'

import { showService } from '../../services/ShowService'

import ShowsGrid from "./ShowGrid";
import Cube from "../view/Cube";
import Search from "../view/Search";

class ShowsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            filteredShows: []
        }
    }

    async componentDidMount() {
        try {
            const shows = await showService.fetchPopularShows()
            this.setState({ shows, filteredShows: shows })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    searchShows = (searchText) => {
        const allShows = this.state.shows;

        const filteredShows = allShows.filter((show) => {
            return show.name.includes(searchText);
        });

        this.setState({ filteredShows })
    }


    render() {
        const { filteredShows, shows } = this.state
        return (
            <Cube isLoading={_.isEmpty(shows)}>
                <Search onSearch={this.searchShows} />
                <ShowsGrid shows={filteredShows} />
            </Cube>
        )
    }
}

export default ShowsPage