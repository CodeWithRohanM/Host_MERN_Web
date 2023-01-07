import React from "react";

const ReduxList = (props) => {

    return <>
        <div className="flex flex-row justify-between">
            <input type="text" className="w-full p-2 focus: outline-none text-2xl appearance-none bg-transparent border-black border-b" value={props.getItem} />
            <div className="flex justify-between items-center">
                <button className="ml-2 mr-5 p-3 border-2 rounded-xl border-red-300 hover:text-white hover:bg-red-500 hover:text-xl hover:cursor-pointer hover:font-semibold">X</button>
            </div>
        </div>
    </>
};

export default ReduxList;