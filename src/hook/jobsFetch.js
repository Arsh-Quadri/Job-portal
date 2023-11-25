import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            // 'X-RapidAPI-Key': 'a6f5651026msh6591c3b9c4064a9p1edcf1jsne4593f6b4b81',
            // 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            // 'X-RapidAPI-Key': 'd23d4ec002mshf17e76ce566da76p162b4cjsnf1be7df13376',
            // 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com' //shawn
            'X-RapidAPI-Key': '8f337eea71msh4f7eef78fb131fbp1dbc9fjsn8941f1321235',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'//arsh110
        },
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data);
            // console.log(data)
            // console.log(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            console.log(error)
            alert("There is an error" + error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
        // console.log(data)

    }, [])
    useEffect(() => {
        // console.log(data); // This will log the updated data whenever it changes
    }, [data]);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch }
}

export default useFetch;