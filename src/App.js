import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Munich" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ghada-odeh/"
            target="blank"
            rel="noreferrer"
          >
            Ghada Odeh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/godeh2016/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-react-ghada-odeh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
