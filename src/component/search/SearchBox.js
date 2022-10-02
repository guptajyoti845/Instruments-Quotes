import React, {useState} from "react";
import styles from './SearchBox.module.css';

// eslint-disable-next-line react/prop-types
const SearchBox = ({onSearch}) => {
    const [value, setValue] = useState('')
    const onSearchHandler = () => {
        onSearch(value)
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={styles.searchBox}>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onSearchHandler}>Search</button>
        </div>
    )
}
export default SearchBox;
