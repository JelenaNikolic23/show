import React,{Component, Fragment} from 'react'
import './App.css';

import Header from "../view/Header";
import Main from "../../Main";
import Footer from '../view/Footer'


class App extends Component {
  render() {
    return (
        <Fragment>
            <Header title="Bit Shows" />
            <Main />
            <Footer />
        </Fragment>
    );
  }
}

export default App;
