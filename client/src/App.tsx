import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import SignupPage from 'pages/SignupPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
