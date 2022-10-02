import React, {useEffect, useState} from "react";
import Table from "../component/Table/Table";
import {useLocation} from "react-router-dom";

const Quotes = ()=>{
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const quotesHeader =['Price', 'Time', 'Valid Till'];
    const location = useLocation();

    const symbol = location.pathname.split('/')[2];

    useEffect(() => {
        getInstruments().then(()=>{
            if(quotes["err_msg"] && !quotes["success"]){
                setError(true);
            }
        });
    }, []);

    async function getInstruments() {
        fetch(
            `https://prototype.sbulltech.com/api/v2/quotes/${symbol}`
        )
            .then((response) => response.json())
            .then(data => {
                setQuotes(data.payload[symbol])
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }

    if (loading) return "Loading...";
    if (error) return "Error!";

    const onSortHandler=(sortByAscending) => {
        const sortedQuotes = quotes.sort((a,b) => {
            if(sortByAscending) return Date.parse(a.time.toString())-Date.parse(b.time.toString());
            return Date.parse(b.time.toString())-Date.parse(a.time.toString())
        });
        setQuotes([...sortedQuotes]);
    }
    return (
        <Table header={quotesHeader} sortBy={"Time"} onSort={onSortHandler}>
            <tbody>
            {!quotes.length && <h3 style={{margin:"auto", display:"table"}}>No result Found</h3>}
            {!!quotes.length && quotes.map((quote, index)=>{
                return (<tr key={index}>
                    <td>{quote.price}</td>
                    <td>{quote.time}</td>
                    <td>{quote.valid_till}</td>
                </tr>)
            })}
            </tbody>
    </Table>
    )
}
export default Quotes;
