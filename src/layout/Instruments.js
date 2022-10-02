import SearchBox from "../component/search/SearchBox";
import Table from "../component/Table/Table";
import React, {useEffect, useState} from "react";
import Papa from "papaparse";
import {Link} from "react-router-dom";

const Instruments = ()=>{
    const instrumentHeader = ['Symbol', 'Name', 'Sector'];
    const [instruments, setInstruments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
    const [filteredInstruments, setFilteredInstruments] = useState([])

    useEffect(() => {
        getInstruments();
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
        <React.Fragment>
            <SearchBox onSearch={onSearchHandler}/>
            <Table header={instrumentHeader}>
                <tbody>
                {!filteredInstruments.length && <h3 style={{margin:"auto", display:"table"}}>No result Found</h3>}
                {!!filteredInstruments.length && filteredInstruments.map((instrument, index)=>{
                    return (<tr key={index}>
                        <td><Link to={`quotes/${instrument[0]}`}>{instrument[0]}</Link></td>
                        <td>{instrument[1]}</td>
                        <td>{instrument[2]}</td>
                    </tr>)
                })}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default Instruments;
