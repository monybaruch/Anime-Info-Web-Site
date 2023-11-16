import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopularAnimePage } from './data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularAnimePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
