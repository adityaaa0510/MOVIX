// ab hame axios use krke ek global method likhana hai apni api callkene ke liye through out the applicateion use krne ke liye
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjA0ODdmOGZhYjEyZjYzODM2YjhkYzAzYmJjOTVjNiIsInN1YiI6IjY0ODZkMmFhZTM3NWMwMDExYzgwYzYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bc3FLv2bqcaldgp5DqId6I1wa5dbVi18XMs5NgfhAjU";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};