import axios from "axios";

axios.defaults.baseURL = "https://disease.sh/v3/covid-19";

export const apiService = () => {

    const getAll = () => {
        const response = axios.get("/all");
        return response;
    }

    const getHistorical = () => {
        const response = axios.get("/historical/all?lastdays=120");
        return response;
    }

    return {
        getAll,
        getHistorical
    }
}
