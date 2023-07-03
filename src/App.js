// Estilização
import './App.css';

// Components 
import Contador from './components/contador';
import Cabecalho from './components/cabecalho';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho /> 
        <Contador />
      </Provider>
   </div>
  );
}


export default App;
