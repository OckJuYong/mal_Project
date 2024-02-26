import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from "./conponent/main/main";
import nonMain from './conponent/main/nonMain';

import login from './conponent/login/login';
import signup from './conponent/login/signup';

import slideMain from './conponent/slide/slideMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/l" Component={nonMain} />
        <Route path="/login" Component={login} />
        <Route path="/signup" Component={signup} />
        <Route path='/slideMain' Component={slideMain} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
