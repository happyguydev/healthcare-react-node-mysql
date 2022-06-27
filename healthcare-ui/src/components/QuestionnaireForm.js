import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { SubmitAnswer } from "../store/action";
import QuestionnaireLine from "./QuestionnaireLine";
import QuestionnaireModal from "./QuestionnaireModal";

const initData = [
  { title: "1. I have felt cheerful and in good spirits", value: "" },
  { title: "2. I have felt calm and relaxed", value: "" },
  { title: "3. I have felt active and vigorous", value: "" },
  { title: "4. I wake up feeling fresh and rested", value: "" },
  {
    title: "5. My daily life has been filled with things that interest me",
    value: "",
  },
];

const QuestionnaireForm = (props) => {
  const [data, setData] = useState(initData);
  const [result, setResult] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(false);

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
    const data = {
      name: "test",
      email: "test@test.com",
      status: result.join(),
      role: "user",
    };
    dispatch(SubmitAnswer(data))
      .then((res) => {
        console.log(res);
        setDisable(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.email && props.status) {
      const statusResult = props.status.split(",");
      setData((prev) =>
        prev.map((item, index) => {
          return {
            title: item.title,
            value: parseInt(statusResult[index]),
          };
        })
      );
      setDisable(true);
      return;
    }
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && <QuestionnaireModal />}
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-md border-8 border-gray-200 w-3/4 max-w-6xl p-4">
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
            {data.map((item, index) => {
              return (
                <QuestionnaireLine
                  key={index}
                  id={index}
                  data={item}
                  onDisable={disable}
                  onHandleValue={onHandleValue}
                />
              );
            })}
          </div>
          <div className="w-full text-right px-4">
            <button
              type="button"
              className="font-sans font-bold border bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-700 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 text-sm rounded-md transition duration-500 ease select-none focus:outline-none focus:shadow-outline px-7 py-3 mt-2"
              onClick={onHandleSubmit}
              disabled={disable}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.email,
  status: state.status,
  role: state.role,
  createdAt: state.createdAt,
  updatedAt: state.updatedAt,
});

export default connect(mapStateToProps)(QuestionnaireForm);
