import { Routes, Route } from 'react-router-dom';
import { SharedLayout, PopularAnimePage, AnimeInfo, UserLogin, NotFound } from './data';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PopularAnimePage />} />
        <Route path="anime/:id" element={<AnimeInfo />} />
        <Route path="login" element={<UserLogin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
