import React from "react";
import './login.css'
const Login = () => {
    return(
        <div className="container">

         <div className="header">
             <div className="text"><span className="enter">Вход</span></div>
         </div>
         <div className="inputs">
             <div className="login">
                 <p>Логин</p>
                 <input type="text"/>
                 
             </div>
             <div className="password">
                 <p>Пароль</p>
                 <input type="password"/>
             </div>
         </div>
         <div className="button"><button>Войти</button></div>



         </div>





    )
}
export default Login