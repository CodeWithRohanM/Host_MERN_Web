import React, { useState } from "react";
import Lists from "./Lists";

export default function ToDoList() {

    const [storeItem, setStoreItem] = useState("");
    const [listItem, setListItem] = useState([]);

    const addItemDetails = async (event) => {
        try {
            const getValue = event.target.value;
            setStoreItem(getValue);
        } catch (err) {
            console.log(err);
        }
    };


    const displayItem = () => {
        console.log("Item Entered = " + storeItem);
        if(storeItem == "")
        {
            throw new Error(window.alert("Please Type Something To Add.."));
        }

        setListItem((listItem) => [...listItem, storeItem]);
        setStoreItem("");
    };


    const deleteItem = (id) =>{
        setListItem((listItem) => {
            return listItem.filter((curValue, index)=>{
                return index !== id;
            })
        })
    };


    // const editListItem = (id) =>{
    //     setStoreItem(getItem);
    // }


    const saveEditedItem = () =>{
        console.log(storeItem);
        console.log("Item Entered = " + storeItem);
        if(storeItem == "")
        {
            throw new Error(window.alert("Please Type Something To Add.."));
        }

        setListItem((listItem) => [...listItem, storeItem]);
        setStoreItem("");
    }





    return <>

        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-san mt-40">
            <div className="bg-blue-200 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow-2xl appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={storeItem} onChange={addItemDetails} />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:text-xl hover:font-semibold hover:bg-green-400 hover:cursor-pointer" onClick={displayItem}>Add</button>
                        <button className="ml-2 flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:text-xl hover:font-semibold hover:bg-green-400 hover:cursor-pointer" onClick={saveEditedItem}>Save</button>
                    </div>
                </div>


                <div className={`flex flex-col`} id="listItems">
                    {
                        listItem.map((curValue, index)=>{
                            return <Lists key = {index} getItem = {curValue} id = {index} deleteItem = {deleteItem} editListItem = {(id)=>{
                                setStoreItem(curValue);
                            }}  />
                        })
                    }

                </div>

            </div>
        </div>

    </>
}