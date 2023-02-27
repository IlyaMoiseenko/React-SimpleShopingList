import React, {useState} from 'react';
import {BsCheckCircle, BsChevronLeft, BsChevronRight, BsCheckCircleFill} from "react-icons/bs";

const Item = ({item, changeIsCheckedHandler, incrementItemHandler, decrementItemHandler}) => {
    return (
        <div className='item-container'>
            {
                item.isChecked ?
                    <div className='item-name completed'>
                        <BsCheckCircleFill onClick={() => changeIsCheckedHandler(item.id)} />
                        <span>{item.text}</span>
                    </div>
                    :
                    <div className='item-name'>
                        <BsCheckCircle onClick={() => changeIsCheckedHandler(item.id)} />
                        <span>{item.text}</span>
                    </div>
            }

            <div className='quantity'>
                <button>
                    <BsChevronLeft onClick={() => decrementItemHandler(item.id)} />
                </button>

                <span> {item.quantity} </span>

                <button>
                    <BsChevronRight onClick={() => incrementItemHandler(item.id)} />
                </button>
            </div>
        </div>
    );
};

export default Item;