

import TopHeader from "./topHeader/TopHeader";

import { Outlet } from "react-router-dom";


function App() {

 

  return (
    <>
      <TopHeader />
      <Outlet/>
    </>
  );
}

export default App;
