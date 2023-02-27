import React from 'react';
import Item from "./Item";

const ItemsList = ({items, changeIsCheckedHandler, incrementItemHandler, decrementItemHandler}) => {
    return (
        <div className='item-list'>
            {
                items.map((item) => {
                    return <Item
                        key={item.id}
                        item={item}
                        changeIsCheckedHandler={changeIsCheckedHandler}
                        incrementItemHandler={incrementItemHandler}
                        decrementItemHandler={decrementItemHandler}
                    />
                })
            }
        </div>
    );
};

export default ItemsList;