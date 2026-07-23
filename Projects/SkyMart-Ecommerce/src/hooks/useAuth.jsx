import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {
  const { registeredUsers, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // login logic
  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User loggedIn");
    navigate("/main");
    reset();
  };

  // register logic
  let registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    toast.success("user registered successfully");
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/main");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
