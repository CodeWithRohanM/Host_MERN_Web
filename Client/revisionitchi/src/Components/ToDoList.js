import React, { useState } from "react";
import Lists from "./Lists";

export default function ToDoList() {

    const [storeItem, setStoreItem] = useState("");
    const [listItem, setListItem] = useState([]);
    const [updateText, setUpdateText] = useState("Add");
    const [itemId, setItemId] = useState(null);

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
        if (storeItem === "") {
            throw new Error(window.alert("Please Type Something To Add.."));
        }

        if (updateText === "Edit") {
            setListItem((listItem) => {
                return listItem.map((curValue, index) => {
                    if (index === itemId) {
                        return storeItem ;
                    }
                    return curValue;
                })
            });
            setUpdateText("Add");
            setStoreItem("");
            setItemId(null);
        }
        else {
            setListItem((listItem) => [...listItem, storeItem]);
            setStoreItem("");
        }

    };




    const deleteItem = (id) => {
        setListItem((listItem) => {
            return listItem.filter((curValue, index) => {
                return id !== index;
            })
        })

    };


    const deleteAll = () => {
        setListItem([]);
    };


    const updateItem = (id) => {
        const getItem = listItem.find((curValue, index) => {
            return (id === index);
        });
        console.log("Data = " + getItem);
        setStoreItem(getItem);
        setUpdateText("Edit");

        setItemId(id);
    }



    return <>

        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-san mt-40">
            <div className="bg-blue-200 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow-2xl appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={storeItem} onChange={addItemDetails} />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:text-xl hover:font-semibold hover:bg-green-400 hover:cursor-pointer" onClick={displayItem}>{updateText}</button>

                    </div>
                </div>


                <div className={`flex flex-col`} id="listItems">
                    {
                        listItem.map((curValue, index) => {
                            return <Lists key={index} id={index} getItem={curValue} deleteItem={deleteItem} updateItem={updateItem} />

                        })
                    }

                </div>


                <div className="flex flex-row justify-center items-center">
                    <button className={`p-3 text-xl font-mono text-center mt-12 rounded-xl hover: cursor-pointer ${listItem.length === 0 ? `text-black bg-green-500` : `text-white bg-red-500 font-extrabold`}`} onClick={deleteAll}>
                        {`${listItem.length === 0 ? `Hey,How Are You Today?` : `Delete All`}`}</button>
                </div>

            </div>
        </div>

    </>
}