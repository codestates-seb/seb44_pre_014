import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import TestPageh from 'pages/TestPage-h';
import MyPage from 'pages/MyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
