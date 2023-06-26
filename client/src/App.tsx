import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AskPage from 'pages/AskPage';
import EditPage from 'pages/EditPage';
import DetailQuestion from 'pages/DetailQuestion';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/questions/write" element={<AskPage />} />
      <Route path="/questions/edit/:id" element={<EditPage />} />
      {/* edit : 해당 id 는  questionId */}
      <Route path="/questions/:id" element={<DetailQuestion />} />
    </Routes>
  );
};

export default App;
