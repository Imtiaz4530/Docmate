import AuthForm from "../../components/Common/AuthForm";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  const { login } = useLogin();

  const fields = [
    {
      label: "Identifier",
      name: "identifier",
      type: "text",
      validation: { required: "Email or Username is required" },
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      validation: { required: "Password is required" },
    },
  ];

  const onSubmit = async (data, reset) => {
    await login(data, reset);

    // try {
    //   const response = await axiosInstance.post("/auth/login", data, {
    //     withCredentials: true,
    //   });
    //   console.log(response.data);
    //   reset();
    // } catch (error) {
    //   console.error("Login error:", error.response.data);
    // }
  };

  return (
    <AuthForm
      title="Login"
      fields={fields}
      onSubmit={onSubmit}
      buttonLabel="Login"
    />
  );
};

export default Login;
