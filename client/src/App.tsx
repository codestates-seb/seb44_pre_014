import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import TestPagea from 'pages/TestPage-a';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPagea />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
