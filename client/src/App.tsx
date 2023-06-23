import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import ProfileEditPage from 'pages/ProfileEditPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/profile/edit/:id" element={<ProfileEditPage />} />
    </Routes>
  );
};

export default App;
