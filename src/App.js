import logo from './logo.svg';
import './App.css';
import './CSS/main.css'
import './CSS/forms.css'
import './CSS/product.css'

import { BrowserRouter } from 'react-router-dom';
import Main from './components/mainComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
