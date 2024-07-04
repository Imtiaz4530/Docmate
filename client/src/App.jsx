import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile/Profile";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

const App = () => {
  const authUser = useStoreState((state) => state.user);
  const setUser = useStoreActions((actions) => actions.setUser);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Profile /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to={"/"} /> : <Login />}
      />
      <Route
        path="/register"
        element={authUser ? <Navigate to={"/"} /> : <Register />}
      />
    </Routes>
  );
};

export default App;
