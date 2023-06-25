import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import { useStore } from './store/user/store.user';
import { useEffect } from 'react';

const App = () => {
  const { setMemberId } = useStore();

  useEffect(() => {
    const memberId = localStorage.getItem('memberId');

    if (memberId) {
      setMemberId(memberId);
    }
  }, [setMemberId]);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
