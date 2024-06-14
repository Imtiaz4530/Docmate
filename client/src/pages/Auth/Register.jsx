import AuthForm from "../../components/Common/AuthForm";

const Register = () => {
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      validation: { required: "Name is required" },
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      validation: { required: "Username is required" },
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      validation: { required: "Email is required" },
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      validation: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      },
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      validation: { required: "Please confirm your password" },
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      validation: { required: "Phone number is required" },
    },
    {
      label: "Gender",
      name: "gender",
      select: true,
      options: [
        { value: "", label: "" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      validation: { required: "Gender is required" },
    },
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",
      validation: { required: "Date of Birth is required" },
      InputLabelProps: { shrink: true },
    },
    {
      label: "Role",
      name: "role",
      select: true,
      options: [
        { value: "", label: "" },
        { value: "doctor", label: "Doctor" },
        { value: "patient", label: "Patient" },
        { value: "admin", label: "Admin" },
      ],
      validation: { required: "Role is required" },
    },
  ];

  const onSubmit = async (data) => {
    try {
      // const response = await axios.post("/api/auth/register", data);
      console.log("Registration successful:", data);
    } catch (e) {
      console.error("Registration error:", e.message);
    }
  };

  return (
    <AuthForm
      title="Register"
      fields={fields}
      onSubmit={onSubmit}
      buttonLabel="Register"
    />
  );
};

export default Register;
