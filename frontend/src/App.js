import LoginContainer from './containers/Login/index';
import MainContainer from './containers/Main/index';

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/main" element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
