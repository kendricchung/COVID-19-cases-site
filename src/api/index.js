import Axios from 'axios';

const url = "https://covid19.mathdro.id/api"; //base url for to the api

export const fetchData = async (country) => {
    let changeableUrl;

    if (country && country !== "global") {
        changeableUrl = `${url}/countries/${country}`;
    } else {
        changeableUrl = url;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changeableUrl);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    } catch(error) {
        console.log(error);
    };
}

export const fetchDailyChartData = async () => {
    try {
        const { data } = await Axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch(error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await Axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}