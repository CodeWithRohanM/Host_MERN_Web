
export const incNumber = (temp) =>{
    return {
        type: "INCR",
        data: temp,
    }
};

export const decNumber = (temp) =>{
    return {
        type: "DECR",
        data: temp,
    }
};

export const multiply = () =>{
    return {
        type: "MUL",
   }
};

export const divide = () =>{
    return {
        type: "DIV",
    }
};



