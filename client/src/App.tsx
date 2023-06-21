import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import TestPageh from 'pages/TestPage-h';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPageh />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
