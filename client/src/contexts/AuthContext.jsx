import { createContext, useEffect, useReducer } from "react";
import api from "../libs/axios.js";

const AuthContext = createContext({});

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  //    Checke if user is log in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/me");
        dispatch({ type: "LOGIN", payload: res.data.user });
      } catch (error) {
        dispatch({ type: "LOGOUT" });
      }
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
