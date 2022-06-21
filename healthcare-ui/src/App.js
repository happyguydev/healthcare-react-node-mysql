import React from "react";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import "./App.css";

import QuestionnaireForm from "./components/QuestionnaireForm";

const Layout = () => {
  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<>Test</>} />
          <Route index element={<QuestionnaireForm />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
