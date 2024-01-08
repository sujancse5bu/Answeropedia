import React from "react";

const QuestionCard = ({data}) => {
  return (
    <div>
      <div className="mx-2 my-4 p-4 rounded-xl border border-gray-300">
        <h3 className="text-black px-2 py-2">
        {data.question}
        </h3>
        <p className="px-2 my-2 text-gray-600">
     {data.answers[0].answer}
        </p>
        <div className="ans-view flex flex-row items-center justify-start px-2">
          <div className="">{data.answerCount} Answers {data.views} views</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
