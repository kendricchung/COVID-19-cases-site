import React from 'react';
import { Helmet } from 'react-helmet';

import {Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData(); 
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        const title = "COVID-19 Cases";
         
        return (
            <div className={styles.container}>
                {/* <Helmet>
                    <title>{title}</title>
                </Helmet> */}
                <Cards data={data}></Cards> 
                    <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                    <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}

export default App;