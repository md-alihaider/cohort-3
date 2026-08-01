import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
export const useAuth = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [registeredUser, setRegisteredUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUsers")) || [];
  });
  
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    const arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User Registered 👋");
    reset();
  };
  const loginForm = (data) => {
    const user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found");
      return
    }
    dispatch(addUser(user));
    localStorage.setItem("loggedInUser",JSON.stringify(user))
    toast.success("User logged in 👋");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
