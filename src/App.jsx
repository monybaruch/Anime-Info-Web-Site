import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimeInfo, PopularAnimePage, SharedLayout, UserLogin, NotFound } from './data';
const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      { index: true, element: <PopularAnimePage /> },
      { path: '/anime/:id', element: <AnimeInfo /> },
      { path: '/login', element: <UserLogin /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
