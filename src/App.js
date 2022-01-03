import logo from "./VaderLogo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Layne Website</p>
        <p>Testing AWS deployments</p>
        <a
          className="App-link"
          href="https://laynethompson.dev"
          //href="https://layne.website"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOTO Site
        </a>
      </header>
    </div>
  );
}

export default App;
