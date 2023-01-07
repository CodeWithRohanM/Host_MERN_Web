const initialState = {
    list: [],
};

export const updateListItems = (state = initialState, action)=>{
    switch(action.type)
    {
        case "Add_Item":{
            return {
                list: [
                    ...state.list,
                    action.payLoad
                ]
            }
        }

        default: return state;
    }
};

