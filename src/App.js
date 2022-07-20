import './App.scss';
import CardsContainer from './CardsContainer';
import ResetButton from './ResetButton';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="app-body">
        <Timer initialMinute={1} initialSeconds={30}/>
        <ResetButton />
      <CardsContainer />
      </div>
    </div>
  );
}

export default App;
