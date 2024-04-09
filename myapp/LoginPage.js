//returns html element is react component 
//class is a keyword used for object so it use className

import '../styles/loginPageStyle.css';
import Login from '../components/Login'
const LoginPage=() =>{
    return (<div className="login-page" >
        <div className="login-background">
        </div>
        <Login></Login>
    </div>)
}
//export react component
export default LoginPage;