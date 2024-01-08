import { useState, useEffect } from "react";
import UpDown from './UpDown'
import { selectAuthState, setAuthState } from "../store/authSlice";
// import { useAppSelector, useAppDispatch } from '../store/hooks';

const AnswerItem = ({answer}) => {
//  console.log(answer)


  useEffect(() => {
    console.log('authState changed: ', selectAuthState)
  }, [selectAuthState])

  return (
    <div onClick={() => dispatch(setAuthState(!selectAuthState))}>
      <div className="answer p-2 my-4 border rounded-md">
        <div className="ans-author flex flex-row items-start justify-start">
          <div className="h-8 w-8 border bg-[#1E3A8A] text-white font-medium rounded-full text-center align-middle">
            {answer.answerAuthor[0]}
          </div>
          <div className="author-name">
            <h5 className="font-medium ml-3">{answer.answerAuthor}</h5>
            <p className="text-sm text-gray-600 mt-1">Member since {answer.answerDate}</p>
          </div>
        </div>
        {/* end author section  */}
        {/* <UpDown upVotes={answer.answerUpVotes} downVotes={answer.answerDownVotes} /> */}
        <div className="answer-content">
          <p className="text-gray-700 p-2">
            {/* {answer.answerContent} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnswerItem;
