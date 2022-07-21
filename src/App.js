import './App.scss';
import CardsContainer from './CardsContainer';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="app-body">
        <SideMenu />
      <CardsContainer />
      </div>
    </div>
  );
}

export default App;
