import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
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
    dispatch(loginEmployee(data))
  };
  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    watch,
    navigate,
  };
};
