import AuthForm from "../../components/Common/AuthForm";

const Login = () => {
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

  const onSubmit = async (data) => {
    try {
      // const response = await axios.post("/api/auth/login", data);
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login error:", error.response.data);
    }
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
