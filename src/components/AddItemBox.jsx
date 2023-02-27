import React, {useState} from 'react';
import {BsFillBagPlusFill} from "react-icons/bs";

const AddItemBox = ({addItemHandler}) => {
    const [inputData, setInputData] = useState('')

    const addNewItem = () => {
        addItemHandler(inputData)
        setInputData('')
    }

    return (
        <div className='add-item-box'>
            <input value={inputData} onChange={(event) => setInputData(event.target.value)} className='add-item-input' placeholder='Add an item...' />

            <button onClick={() => addNewItem(inputData)}>
                <BsFillBagPlusFill />
            </button>
        </div>
    );
};

export default AddItemBox;