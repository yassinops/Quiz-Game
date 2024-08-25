import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from "./component/loginform";
import Dashbord from "./component/dashbord";
import Searchbar from "./component/searchbar";
import Navbar from "./component/navbar";
import Topics from "./component/topics";
import Questions from "./component/questions";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
            <Route path="topics" element={<Topics/>}/>
            <Route path="/search" element={<Searchbar/>}/>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/questions" element={<Questions/>}/>
        </Routes>
    );
}

export default App;
