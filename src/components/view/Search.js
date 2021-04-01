import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: ''
        }
    }


    onInputHandler = ({ target }) => {
        const textInput = target.value
        const { onSearch } = this.props

        this.setState({ textInput })

        onSearch(textInput);
    }

    render() {
        const { onInputHandler } = this
        const { textInput } = this.state

        return (
            <form className="col s20">
                <div className="input-field col s20">
                    <i className="material-icons prefix">Search</i>
                    <input
                        onChange={onInputHandler}
                        value={textInput}
                        id="search"
                        type="search"
                        className="validate"
                        placeholder=" "
                    />
                </div>
            </form>
        )
    }
}

export default Search
