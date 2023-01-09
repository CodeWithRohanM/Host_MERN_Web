const initialState = {
    list: [],
};

export const updateListItems = (state = initialState, action)=>{
    switch(action.type)
    {
        case "Add_Item":{
            if(action.payLoad.length === 0)
            {
                alert("Enter Something To Add.. 🤦‍♂️");
            } 
            else
            {
            return {   
                list: [
                    ...state.list,
                    action.payLoad
                ]
            }
        }
        };

        case "Delete_Item":{
            const getList = state.list.filter((curValue, index)=> action.payLoad !== index);

            return {
                list: getList,
            }

        };

        case "Remove_All_Items":{
            return {
                list: []
            }
        }

        default: return state;
    }
};




