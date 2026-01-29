import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar";

import HomePage from "./components/pages/homepage/homePage";
import LeaderBoard from "./components/pages/leaderBoard/leaderBoard";
import Announcement from "./components/pages/announcement/announcement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/leaderboard" Component={LeaderBoard}></Route>
        <Route path="/announcement" Component={Announcement}></Route>
      </Routes>
    </>
  );
}

export default App;
