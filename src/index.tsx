import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ModalWindow from './components/modal/ModalWindow';
import { CustomEnumPath } from './enam';
import Kanban from './pages/Kanban';
import TestedKanban from './components/TestedKanban';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={CustomEnumPath.home} element={<App />} />
        <Route path={CustomEnumPath.modalWindow} element={<ModalWindow />} />
        <Route path={CustomEnumPath.pageHandler} element={<Kanban  />} />
        <Route path={CustomEnumPath.testedPath} element={<TestedKanban  />} />
      </Routes>
    </Router>
    ,
  </Provider>,
);
