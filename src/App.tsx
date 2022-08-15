import { Route, Routes } from 'react-router';
import { NavMenu } from './components';
import { ROUTES } from './const/Routes';
import { Eror404 } from './pages/Eror404';
import { Main } from './pages/Main';
import { Registration } from './pages/Registration';

function App() {
  return (
    <div className="App">
      Тут будет наш сайт
      <NavMenu />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.EROR404} element={<Eror404 />} />
      </Routes>
    </div>
  );
};

export default App;
