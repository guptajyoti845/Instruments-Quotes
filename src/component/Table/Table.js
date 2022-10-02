import './Table.module.css'
import React from "react";

const Table = ({children}) => {
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
                {children}
            </table>
        </>
    );
};

export default Table;
