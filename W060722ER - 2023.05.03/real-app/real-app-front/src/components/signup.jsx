import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";

const SignUp = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required(),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    onSubmit(values) {
      console.log("submitted", values);
    },
  });

  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free you yammani!"
      />

      <form onSubmit={form.handleSubmit} noValidate>
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />
        <Input
          {...form.getFieldProps("name")}
          type="text"
          label="Name"
          required
          error={form.touched.name && form.errors.name}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
