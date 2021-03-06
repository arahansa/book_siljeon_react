import {useReducer} from "react";


const INITIAL_STATE = {name: 'empty', age: 0};

function reducer(state, action){
    switch (action.type){
        case 'setName' :
            return {
                ...state, name: action.name
            }
        case 'setAge':
            return {...state, age: action.age};
        default:
            return state;
    }
}

const ExamUseReducer = () => {

    const [state, dispatch ] = useReducer(reducer, INITIAL_STATE);
    return  (<>
        <p>{`name is ${state.name}`}</p>
        <p>{`age is ${state.age}`}</p>
        <input type="text"
            value={state.name}
               onChange={e => dispatch({type:'setName', name: e.currentTarget.value})}
        />
        <input type={'number'} value={state.age} onChange={e => dispatch({type:'setAge', age : e.currentTarget.value})} />
    </>)
}

export default ExamUseReducer;