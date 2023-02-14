import './App.css';
import { useState } from "react";
import Dashboard from './components/Dashboard/dashboard';
import Result from './components/Result/result'
import { UserData } from './Utils/Data'


function App() {

    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
        },
      ],
    });

  return (
    <>
    <Dashboard/>
    {/* <div style={{ width: 700 }}>
        <Result chartData={userData} />
    </div> */}
    </>
  );
}

export default App;
