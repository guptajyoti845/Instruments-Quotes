import styles from  './Table.module.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Table = ({header, sortBy, children, onSort}) => {

    return (
        <>
            <table>
                <thead>
                <tr>
                    {
                        header.map((col, index) => <th key={index}><span>{col}</span>
                            {
                                col === sortBy && <div className={styles.sortButtons}>
                                    <button onClick={()=>{onSort(true)}}><FontAwesomeIcon icon={faChevronUp} /></button>
                                    <button onClick={()=>{onSort(false)}}><FontAwesomeIcon icon={faChevronDown} /></button>
                                </div>
                            }
                        </th>)
                    }
                </tr>
                </thead>
                {children}
            </table>
        </>
    );
};

export default Table;

