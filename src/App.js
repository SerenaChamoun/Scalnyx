//import './App.css';
import Tab from "./components/Tab";

const jobs = require("./assets/jobs.json");

function App() {
  return (
    <div className="App">
      <Tab jobs={jobs}/>
    </div>
  );
}

export default App;
