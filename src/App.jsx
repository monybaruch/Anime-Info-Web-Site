import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimeInfo, PopularAnimePage } from './data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularAnimePage />}></Route>
        <Route path="/anime/:id" element={<AnimeInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
