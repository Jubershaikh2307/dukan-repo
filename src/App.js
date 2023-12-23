import "./App.css";

import { Navbar, Payout, SideBar } from "./Components/index";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="main-content">
        <Navbar />
        <Payout />
      </div>
    </div>
  );
}

export default App;
