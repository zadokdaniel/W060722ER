import Input from "./common/input";
import PageHeader from "./common/pageHeader";

const SignUp = () => {
  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free you yammani!"
      />

      <form>
        <Input name="email" type="email" label="Email" required />
        <Input name="password" type="password" label="Password" required />
        <Input name="name" type="text" label="Name" required />
      </form>
    </>
  );
};

export default SignUp;
