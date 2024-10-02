import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainChoose } from "./MainChoose";
import { Room } from "./Room/Room";
import { Bottom } from "./Bottom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes >
          <Route path="*" element={<Main></Main>}></Route>
          <Route path="/main" element={<MainChoose></MainChoose>}></Route>
          <Route path="/main/room" element={<Room></Room>}></Route>
        </Routes>
        <Bottom></Bottom>
        <div className="border"></div>
        <Footer></Footer>
      </div></BrowserRouter>

  );
}

export default App;
