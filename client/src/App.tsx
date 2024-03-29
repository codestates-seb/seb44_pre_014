import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import ProfileEditPage from 'pages/ProfileEditPage';
import SignupPage from 'pages/SignupPage';
import LoginPage from 'pages/LoginPage';
import { useUserStore } from './store/user/store.user';
import { useEffect } from 'react';
import AskPage from 'pages/AskPage';
import EditPage from 'pages/EditPage';
import DetailQuestion from 'pages/DetailQuestion';

const App = () => {
  const { setMemberId } = useUserStore();

  useEffect(() => {
    const memberId = localStorage.getItem('memberId');

    if (memberId) {
      setMemberId(memberId);
    }
  }, [setMemberId]);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/profile/edit/:id" element={<ProfileEditPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/questions/write" element={<AskPage />} />
      <Route path="/questions/edit/:id" element={<EditPage />} />
      {/* edit : 해당 id 는  questionId */}
      <Route path="/questions/:id" element={<DetailQuestion />} />
    </Routes>
  );
};

export default App;
