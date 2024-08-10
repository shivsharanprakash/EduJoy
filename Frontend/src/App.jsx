import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Gifts from './Pages/Gifts';
import Maths from './Pages/Maths';
import Science from './Pages/Science';
import Arts from './Pages/Arts';
import Geography from './Pages/Geography';
import Hindi from './Pages/Hindi';
import English from './Pages/English';
import Marathi from './Pages/Marathi';
import MathQuiz from './Pages/MathsQuiz';
import ScienceQuiz from './Pages/ScienceQuiz';
import Games from './Pages/Games';
import LearnMore from './Pages/LearnMore';
import { useAuth } from '../context/AuthProvider';
import GetStarted from './Pages/GetStarted';

const RequireAuth = ({ children }) => {
  const [authUser] = useAuth();
  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

const App = () => {
  const [authUser] = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/subject/maths" element={<Maths />} />
      <Route path="/subject/science" element={<Science />} />
      <Route path="/subject/arts" element={<Arts />} />
      <Route path="/subject/geography" element={<Geography />} />
      <Route path="/language/hindi" element={<Hindi />} />
      <Route path="/language/english" element={<English />} />
      <Route path="/language/marathi" element={<Marathi />} />
      <Route path="/quiz/mathsquiz" element={
        <RequireAuth>
          <MathQuiz />
        </RequireAuth>
      } />
      <Route path="/quiz/sciencequiz" element={
        <RequireAuth>
          <ScienceQuiz />
        </RequireAuth>
      } />
      <Route path="/quiz/games" element={
        <RequireAuth>
          <Games />
        </RequireAuth>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/gift-cards" element={<Gifts />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/subscription-plan" element={<GetStarted />} />

    </Routes>
  );
};

export default App;
