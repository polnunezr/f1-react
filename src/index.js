import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Todo } from "./components/Todo";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

//import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="drivers" element={<Todo />} />
        <Route path="teams" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
