import React, { useState, useEffect } from 'react';
import './index.css';
import AddItemBox from "./components/AddItemBox";
import ItemsList from "./components/ItemsList";
import Total from "./components/Total";
import uuid from "react-uuid";

const App = () => {
    const defaultValue = {
        id: '',
        text: 'Milk',
        quantity: 1,
        isChecked: false
    }

    const [items, setItems] = useState([defaultValue])

    const addItemHandler = (itemText) => {
        let newItem = {
            ...defaultValue,
            id: uuid(),
            text: itemText
        }

        setItems([newItem, ...items])
    }

    const calculateTotal = () => {
        let total = 0

        items.forEach((item) => {
            total += item.quantity
        })

        return total
    }

    const changeIsCheckedHandler = (id) => {
        let newItems = [...items]

        newItems.find((item) => {
            if (item.id === id) {
                item.isChecked = !item.isChecked
            }
        })

        setItems(newItems)
    }

    const incrementItemHandler = (id) => {
        let newItems = [...items]

        newItems.find((item) => {
            if (item.id === id) item.quantity += 1
        })

        setItems(newItems)
    }

    const decrementItemHandler = (id) => {
        let newItems = [...items]

        newItems.find((item) => {
            if (item.id === id) item.quantity -= 1
        })

        setItems(newItems)
    }

    return (
        <div className='app-background'>
            <div className='main-container'>
                <AddItemBox addItemHandler={addItemHandler} />

                <ItemsList
                    items={items}
                    changeIsCheckedHandler={changeIsCheckedHandler}
                    incrementItemHandler={incrementItemHandler}
                    decrementItemHandler={decrementItemHandler}
                />

                <Total total={calculateTotal()} />
            </div>
        </div>
    );
};

export default App;
