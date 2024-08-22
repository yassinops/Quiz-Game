import './App.css';
import {Routes,Route} from "react-router-dom";
import LoginForm from "./component/loginform";
import Dashbord from "./component/dashbord";

function App() {
  return (
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashbord/>}/>
        </Routes>
  );
}

export default App;
