import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './create/create';
import Main from './main/main';
import Button from './ui-elements/button/button';
import Viewing from './viewing/viewing';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='buttons' element={<Button shadow="shadow" size='big' title='Начать' />} />
        <Route path='create' element={<Create />} />
        <Route path='viewing' exact element={<Viewing />} />
        <Route path='create/viewing' exact element={<Viewing />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
