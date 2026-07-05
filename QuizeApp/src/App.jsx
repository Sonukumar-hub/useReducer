import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import QuizeProvider from "./context/QuizContext";
const Home = lazy(()=> import("./pages/Home"))
const Quize = lazy(()=> import("./pages/Quize"))
const LeaderBoard = lazy(()=> import("./pages/LeaderBoard"))
const Result = lazy(()=> import("./pages/Result"))

function App() {
  return (
    <QuizeProvider>
      <BrowserRouter>
      <Suspense fallback={<h2 className="text-center mt-5">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quize />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </QuizeProvider>
    
  );
}

export default App;