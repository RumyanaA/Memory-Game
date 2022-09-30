import ReactModal from 'react-modal';
import './App.scss';
import ContentWrapper from './ContentWrapper';

function App() {
  ReactModal.setAppElement('#root');
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="app-body">
        <ContentWrapper />
      </div>
    </div>
  );
}

export default App;
