
const firstInitialState = 0;
const secondInitialState = 10;

export const updateNumber = (state = firstInitialState, action)=>{
    switch(action.type)
    {
        case "INCR": {
            return state + action.data;
        }

        case "DECR": {
            return state - action.data;
        }

        default: return state;
    }
};

export const changeNumber = (state = secondInitialState, action)=>{
    switch(action.type)
    {
        case "DIV": {
            return state / 5 ;
        }
        case "MUL": {
            return state * 5;
        }
        default: return state;
    }
};
