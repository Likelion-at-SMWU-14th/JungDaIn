import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<QuizPage />}/>
          <Route path="/result" element={<ResultPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;