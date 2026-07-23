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
    getValues,
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
    navigate("/home");
    reset();
  };

  // register logic
  let registerFormSubmit = (data) => {
    const existingUser = registeredUsers.find(
      (user) => user.email === data.email,
    );

    if (existingUser) {
      toast.error("Email already registered");
      return;
    }

    const { confirmPassword, ...user } = data;
    const arr = [...registeredUsers, user];
    setRegisteredUsers(arr);
    toast.success("user registered successfully");
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/home");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    getValues,
    loginFormSubmit,
    registerFormSubmit,
  };
};
