import React, { useEffect, useState } from "react";

const QuestionnaireLine = ({ id, title, onHandleValue }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    onHandleValue(id, value);
  }, [value]);

  return (
    <form
      className={`flex flex-row items-center ${
        id !== 4 ? "py-6 border-b-2 border-gray-300 border-dotted" : "pt-6 pb-2"
      }`}
    >
      <p className="basis-1/2">{title}</p>
      <div className="basis-1/2 flex flex-row items-center">
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="0"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="1"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="2"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="3"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="4"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
        <div className="basis-1/6 text-center pl-4 flex flex-col items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`group_${id}`}
              value="5"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>
      </div>
    </form>
  );
};

export default QuestionnaireLine;
