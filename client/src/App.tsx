import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AskPage from 'pages/AskPage';
import EditPage from 'pages/EditPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/questions/write" element={<AskPage />} />
      <Route path="/questions/edit/:id" element={<EditPage />} />
      {/* edit : 해당 id 는  questionId */}
    </Routes>
  );
};

export default App;
