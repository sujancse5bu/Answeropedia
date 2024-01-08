import { stat } from "fs";

const initialState={
    isReply: false,

}

const QuestionReducer=(state=initialState,action)=>{
switch(action.type){
case 'LOGIN':
    return {
        ...state
    }
case 'TOGGLE_REPLY':
    return {
        ...state, isReply: !state.isReply,
    }
    default:
        return state;
}
}
export default QuestionReducer;