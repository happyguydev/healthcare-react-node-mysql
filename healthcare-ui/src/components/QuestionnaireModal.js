import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SaveUserInfo } from "../store/action";

const QuestionnaireModal = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const dispatch = useDispatch();

  const onHandleInput = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };
  const handleSaveUser = () => {
    dispatch(SaveUserInfo(user))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl w-96">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200">
              <h3 className="text-2xl font-semibold">User Information</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Username"
                  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  value={user.username}
                  onChange={(e) => onHandleInput(e.target.value, "username")}
                />
              </div>
              <div className="pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  value={user.email}
                  onChange={(e) => onHandleInput(e.target.value, "email")}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                type="button"
                className="font-sans font-bold border border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md transition duration-500 ease select-none focus:outline-none focus:shadow-outline px-7 py-3 mt-2"
                onClick={handleSaveUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default QuestionnaireModal;
