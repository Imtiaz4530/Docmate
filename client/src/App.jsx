import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import { Navigate, useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Navigate to="/login" replace /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    // Add other protected routes here
  ]);

  return routes;
};

export default App;
