import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from "./component/loginform";
import Dashbord from "./component/dashbord";
import Searchbar from "./component/navbarComponent/searchbar";
import Navbar from "./component/navbarComponent/navbar";
import Topics from "./component/topics";
import Historyquestions from "./component/questionsComponent/historyquestions";
import Medcinequestions from "./component/questionsComponent/medcinequestions";
import Instruction from "./component/instruction";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
            <Route path="topics" element={<Topics/>}/>
            <Route path="instruction" element={<Instruction/>}/>
            <Route path="/search" element={<Searchbar/>}/>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/histquestions" element={<Historyquestions/>}/>
            <Route path="/medtquestions" element={<Medcinequestions/>}/>

        </Routes>
    );
}

export default App;
