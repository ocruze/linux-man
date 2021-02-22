import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Hello world</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//{getManPage("ls")}

function getManPage(commandName) {
  const { exec } = require("child_process");

  exec("man " + commandName, (error, stdout, stderr) => {
    if (error) {
      return error.message;
    }
    if (stderr) {
      return stderr;
    }
    return stdout;
  });
}

export default App;
