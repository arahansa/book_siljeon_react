import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import ExamUseRef from "./exam_useRef/ExamUseRef";
import ExamUseReducer from "./exam_useReducer/ExamUseReducer";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
        <div>
            <Link to={"/"} >Provider 예제</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to={"/useRef"} >useRef 예제</Link>
            <Link to={"/useReducer"} >useReducer 예제</Link>
        </div>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/useRef"} element={<ExamUseRef />}/>
        <Route path={"/useReducer"} element={<ExamUseReducer />}/>
      </Routes>
    </div>
  );
}

export default App;
