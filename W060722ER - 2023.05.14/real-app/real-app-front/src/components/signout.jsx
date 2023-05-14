import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ onSignOut }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onSignOut();
    navigate("/");
  }, []);

  return null;
};

export default SignOut;
