import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<QuizPage />}/>
            <Route path="quiz/:quizId" element={<QuizPage />}/>
            <Route path="result" element={<ResultPage />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;