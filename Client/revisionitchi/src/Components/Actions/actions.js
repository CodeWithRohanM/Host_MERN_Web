export const Add_Item_List = (getData) =>{
    return{
        type: "Add_Item",
        payLoad: getData,
    }

};

export const Delete_Item_List = () =>{
    return {
        type: "Delete_Item",
    };
};

export const Remove_All_Items_List = () =>{
    return {
        type: "Remove_All_Items",
    }
};

