import './App.css';
import Provider from './context/Provider';
import Home from './Home';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
