export const Add_Item_List = (getData) => {
    return {
        type: "Add_Item",
        payLoad: getData,
    }

};

export const Delete_Item_List = (getId) => {
    return {
        type: "Delete_Item",
        payLoad: getId,
    };
};

export const Remove_All_Items_List = () => {
    return {
        type: "Remove_All_Items",
    }
};

