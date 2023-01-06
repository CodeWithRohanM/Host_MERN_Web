import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incNumber, decNumber, multiply, divide} from "../Actions/actions";


const Redux = () => {

    const curStateFirst = useSelector((state)=> state.updateNumber);
    const curStateSecond = useSelector((state)=> state.changeNumber);
    const dispatch = useDispatch();

    return <>
    <div className="h-screen">
        <div className="flex text-center justify-center items-center h-1/2">
            <div className="flex flex-row w-40 h-40 p-2 bg-red-300 justify-center items-centers text-2xl space-x-6">
                <button type="buttom" onClick={()=> dispatch(incNumber(10))}>+</button>
                <h1>{`Value = ${curStateFirst}`}</h1>
                <button type="button" onClick={()=> dispatch(decNumber(5))}>-</button>

            </div>
            
        </div>

        <div className="flex text-center justify-center items-center h-1/2">
            <div className="flex flex-row w-40 h-40 p-2 bg-yellow-300 justify-center items-centers text-2xl space-x-6">
                <button type="buttom" onClick={()=> dispatch(multiply())}>*</button>
                <h1>{`Value = ${curStateSecond}`}</h1>
                <button type="button" onClick={()=> dispatch(divide())}>/</button>

            </div>
            
        </div>
        </div>

    </>
};

export default Redux;