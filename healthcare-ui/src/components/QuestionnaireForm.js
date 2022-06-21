import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { submitAnswer } from "../store/action";
import QuestionnaireLine from "./QuestionnaireLine";

const QuestionnaireForm = () => {
  const [titles] = useState([
    "1. I have felt cheerful and in good spirits",
    "2. I have felt calm and relaxed",
    "3. I have felt active and vigorous",
    "4. I wake up feeling fresh and rested",
    "5. My daily life has been filled with things that interest me",
  ]);
  const [result, setResult] = useState(["", "", "", "", ""]);

  const dispatch = useDispatch();

  const onHandleValue = (id, value) => {
    setResult((res) => {
      return res.map((item, index) => {
        if (index === id) return value;
        return item;
      });
    });
  };

  const onHandleSubmit = () => {
    dispatch(
      submitAnswer({
        first: result[0],
        second: result[1],
        third: result[2],
        fourth: result[3],
        fifth: result[4],
      })
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-8 border-gray-200 w-3/4 max-w-6xl p-4">
        <p className="text-cyan-600 text-3xl mb-4">
          Week 2: WHO-5 Well-Being Index
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex flex-row border-b-2 border-gray-300 border-solid pb-4">
            <p className="basis-1/2 font-sans font-bold">
              Over the last two weeks:
            </p>
            <div className="basis-1/2 flex flex-row">
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                All the time
              </p>
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                Most of the time
              </p>
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                More than half of the time
              </p>
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                Less than half of the time
              </p>
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                Some of the time
              </p>
              <p className="basis-1/6 text-center font-sans font-bold pl-4">
                At no time
              </p>
            </div>
          </div>
          {titles.map((item, index) => {
            return (
              <QuestionnaireLine
                key={index}
                id={index}
                title={item}
                onHandleValue={onHandleValue}
              />
            );
          })}
        </div>
        <div className="w-full text-right px-4">
          <button
            type="button"
            className="font-sans font-bold border border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md transition duration-500 ease select-none focus:outline-none focus:shadow-outline px-7 py-3 mt-2"
            onClick={onHandleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
