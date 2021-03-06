import logo from './logo.svg';
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import withDebug from "./withDebug";
import DebugCounter from "./DebugCounter";
import MouseTracer from "./MouseTracer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <ErrorBoundary>
              <Counter />
          </ErrorBoundary>
        <MyComponent />
        <MyComponent2 />
        <p>디버그 카운터</p>
        <ErrorBoundary>
          <DebugCounter />
        </ErrorBoundary>

        <MouseTracer>
          { ({x, y}) => (<p>{`(x,y) : (${x}, ${y})`}</p>)}
        </MouseTracer>
      </header>

    </div>
  );
}

export default App;
