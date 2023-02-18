import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/login';
import  Addvoter from './components/Addvoters/addvoters';
import Result from './components/Result/result';
import { UserData } from './Utils/Data'


function App() {

    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor :"#1D95C9",
          borderRadius : 15,
          
        },
      ],
    });

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addvoter' element={<Addvoter/>}/>
      <Route path='/result' element={<Result chartData={userData} />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
