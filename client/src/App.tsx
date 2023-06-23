import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AskPage from 'pages/AskPage';
import EditPage from 'pages/EditPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/questions/write/:id" element={<AskPage />} />
      <Route path="/questions/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default App;
