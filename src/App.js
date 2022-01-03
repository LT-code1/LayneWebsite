import logo from "./VaderLogo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Layne Website</p>
        <p>Testing AWS deployments</p>
        {/* <text>GOTO Site</text> */}
        <a
          className="App-link"
          href="https://laynethompson.dev"
          //href="https://layne.website"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOTO Site
          <div>LayneThompson.dev</div>
        </a>
        <br></br>
        <text>AWS Amplify Example</text>
      </header>
    </div>
  );
}

export default App;
