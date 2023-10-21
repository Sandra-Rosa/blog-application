import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: white;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
  text-align:center;
`;
const signupInitialValues = {
  name:'',
  username:'',
  password:''
}
const Login = () => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
    const toggleSignup= ()=>{
        account==='login'?toggleAccount('signup'):toggleAccount('login');
    }

    const onInputChange = (e)=>{
      setSignup({...signup,[e.target.name]:e.target.value});
    }
  return (
    
    <Component>
      <h1>Blogger</h1>
      {account === "login" ? (
        <Wrapper>
          <TextField variant="standard" placeholder="Enter username" />
          <TextField variant="standard" placeholder="Enter password" />
          <LoginButton>Login</LoginButton>
          <Text>OR</Text>
          <SignupButton onClick={()=>toggleSignup()}>Create an account</SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="name" placeholder="Enter name" />
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" placeholder="Enter username" />
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" placeholder="Enter password" />
          <SignupButton>Sign Up</SignupButton>
          <Text>OR</Text>
          <LoginButton variant="contained" onClick={()=>toggleSignup()}>
            Already have an account?
          </LoginButton>
        </Wrapper>
      )}
    </Component>
  );
};

export default Login;
