import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from './Protected/AuthContext';
import ProtectedRoute from "./Protected/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn /> } />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}