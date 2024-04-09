import Image from '../components/Image';
import logo from '../resources/resource/logo.png';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import '../styles/loginformstyle.css'
import { useState } from 'react';
const Login=() =>{

    let [username, setUsername]=useState("jhansi");
    let [password, setPassword]=useState();

    const handleLogin = () => {
        console.log("Clicked");
    }
    return(
        <div className="login-form-container">
            <div className='app-logo' >
                <Image src={logo}  alt="Logo" ></Image>
            </div>
            <h1>Sign In</h1>
            <Textfield placeholder="Username" name="username" type="text" value={username} 
            onChangeHandler = {setUsername}
            ></Textfield>
            <Textfield placeholder="password" name="password" type="password" value={password}
            onChangeHandler={setPassword}></Textfield>
            <Button name={"Login"} type="submit" onClick={handleLogin} ></Button>
            <p className='forgot-password'>Forgot Password?<a href="#">   Click Here</a></p>
        </div>
    );
}
export default Login;

//react router -> move to other page