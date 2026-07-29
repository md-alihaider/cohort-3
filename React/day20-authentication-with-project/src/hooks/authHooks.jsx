import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
export const useAuth = () => {
  let navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState([]);
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
  };
  const loginForm = (data) => {
    const user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found");
    }

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
