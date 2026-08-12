import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router"

export let useAuth = () => {
  let navigate = useNavigate()
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm({
     mode: "onChange",
     defaultValues: {
       fullName: "",
       email: "",
       password: "",
       terms: false,
     },
   });

  const onRegisterSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };
  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    watch,
    navigate
  }
}