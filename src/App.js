import "./index.css";
import React, {useState, useEffect} from "react";
import Papa from 'papaparse';


import Table from "./component/Table/Table";
import SearchBox from "./component/search/SearchBox";

export default function App() {
    const [instruments, setInstruments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
    const [filteredInstruments, setFilteredInstruments] = useState([])

    useEffect(() => {
        getInstruments().then(r => console.log(r));
    }, []);

    async function getInstruments() {
        fetch(
            "https://prototype.sbulltech.com/api/v2/instruments"
        )
            .then(response => response.text())
            .then(v => {
                setInstruments(Papa.parse(v).data.slice(1))
                setFilteredInstruments(Papa.parse(v).data.slice(1))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }
    if (loading) return "Loading...";
    if (error) return "Error!";
    const onSearchHandler = (value) => {
        setFilteredInstruments(instruments.filter(instrument => instrument[1]?.toLowerCase().includes(value.toLowerCase()) ||
            instrument[0]?.toLowerCase().includes(value.toLowerCase())));
    }
    return (
        <>
            <SearchBox onSearch={onSearchHandler}/>
            <Table instruments={filteredInstruments}/>
        </>
    );
}
