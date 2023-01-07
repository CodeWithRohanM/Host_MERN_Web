import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Add_Item_List, delete_Item_List, Remove_All_Items_List } from "./Actions/actions";
import ReduxList from "./ReduxList";

const ReduxToDo = () => {

    const dispatch = useDispatch();

    const getList = useSelector((state) => state.updateListItems.list);

    const [data, setData] = useState("");

    const setListItem = (event) =>{
        const getValue = event.target.value;

        setData(getValue);
    };



    return <>

        <div className="h-100 w-full flex items-center justify-center mt-40">
            <div className="bg-blue-200 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow-2xl appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value = {data} onChange = {setListItem} />

                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:text-xl hover:font-semibold hover:bg-green-400 hover:cursor-pointer" onClick={()=> dispatch(Add_Item_List(data), setData(''))}>Add Item</button>

                    </div>
                </div>

                <div className={`flex flex-col space-y-6 items-center w-full p-3`}>

                    {
                        getList.map((curValue, index)=>{
                            return <ReduxList key = {index} getItem = {curValue}/>
                        })
                    }



                </div>

            </div>
        </div>

    </>
};


export default ReduxToDo;