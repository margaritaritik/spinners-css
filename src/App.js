import BookSpinner from "./spiners/BookSpinner/BookSpinner";
import SunSpinner from "./spiners/SunSpinner/SunSpinner";
import HeartSpinner from "./spiners/HeartSpinner/HeartSpinner";
import HeartBeatSpinner from "./spiners/HeartBeatSpinner/HeartBeatSpinner";

function App() {
  return (
    <div className="App">
        <BookSpinner></BookSpinner>
        <SunSpinner></SunSpinner>
        <div >
            <HeartSpinner></HeartSpinner>
            <HeartBeatSpinner></HeartBeatSpinner>
        </div>
    </div>
  );
}

export default App;
