import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/brennawilliamson/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Brenna Williamson
        </small>
      </footer>
    </div>
  );
}
