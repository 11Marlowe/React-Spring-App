import Navbar from './components/Navbar';
import AddCharacter from './components/AddCharacter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewCharacters from './components/ViewCharacters';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ViewCharacters />} />
          <Route path='/' element={<ViewCharacters />} />
          <Route path='/viewCharacters' element={<ViewCharacters />} />
          <Route path='/addCharacter' element={<AddCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
