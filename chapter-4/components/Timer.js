import React, {useEffect, useReducer} from "react";


function Timer({initialTotalSeconds}){
    const [state, dispatch] = useReducer(reducer, {
        hour: Math.floor(initialTotalSeconds / 3600),
        minute: Math.floor((initialTotalSeconds % 3600) / 60),
        second: initialTotalSeconds % 60
    });

    const {hour, minute, second } = state;
    useEffect(()=>{
        const id = setInterval(dispatch, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <p>hour : {state.hour}, min: {state.minute}, sec : {state.second}</p>
        </div>
    )
}

export default Timer;

function reducer(state){
    const {hour, minute, second} = state;
    if(second){
        return {
            ...state,
            second: second -1
        }
    } else if (minute){
        return {
            ...state,
            minute: minute -1,
            second: 59
        }
    }else if (hour){
        return {
            hour: hour -1,
            minute: 59,
            second: 59,
        }
    }else{
        return state;
    }
}
