import './Table.module.css'
import React from "react";

// eslint-disable-next-line react/prop-types
const Table = ({instruments}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Sector</th>
                </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line no-undef,react/prop-types */}
                {!instruments.length && <span style={{margin:"auto", display:"table"}}>No result Found</span>}
                {/* eslint-disable-next-line react/prop-types */}
                {(!!instruments.length) && instruments.map((instrument, key) => (
                    <tr key={key}>
                        <td>{instrument[0]}</td>
                        <td>{instrument[1]}</td>
                        <td>{instrument[2]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
