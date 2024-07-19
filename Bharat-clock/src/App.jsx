import AppHeading from "./components/AppHeading";
import ClockSlogn from "./components/ClockSlogn";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <AppHeading />
      <ClockSlogn />
      <CurrentTime />
    </center>
  );
}

export default App;
