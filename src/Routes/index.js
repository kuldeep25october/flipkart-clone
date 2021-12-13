// import React, { useState } from "react";
// import "./style.scss";
// import { message, Spin } from "antd";
// import axios from "axios";

// const LoginForm = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userObj = {
//       user: userName.trim().toLowerCase(),
//       password: password.trim(),
//     };
//     setIsLoading(true);
//     axios
//       .post("https://xkode.herokuapp.com/api/user", userObj)
//       .then((response) => {
//         console.log(response.data);
//         setIsLoading(false);
//         if (response.data.success === 1) {
//           message.success("Login Successful.");
//         }
//         if (response.data.success === 0) {
//           message.error("Check username and password.");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       });
//   };
//   return (
//     <div className="container" style={{ width: "100%" }}>
//       <div className="loginForm leftSection">
//         <div>
//           <h1>Sign in to Login Module</h1>
//         </div>
//       </div>
//       <div className="loginForm rightSection">
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <h2>Login</h2>
//           <label>Username</label>
//           <input
//             type="text"
//             placeholder="Enter Username"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="text"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {isLoading === true ? (
//             <Spin medium />
//           ) : (
//             <input type="submit" value="Submit" />
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default LoginForm;
// .loginForm {
//   display: flex;
//   align-items: center;
//   height: 100vh;
//   justify-content: center;
//   text-align: center;
//   width: 50%;
//   form {
//     width: 300px;
//     h2 {
//       color: #000000d4;
//       font-family: Poppins;
//       font-size: 25px;
//       font-weight: bold;
//     }
//     label {
//       color: #2e2b2b;
//       font-family: Roboto;
//       display: block;
//       text-align: left;
//       margin-top: 5px;
//       font-size: 16px;
//       margin-bottom: 5px;
//     }
//     input {
//       font-size: 13px;
//       height: 45px;
//       display: block;
//       width: 100%;
//       padding-left: 5px;
//       font-family: Roboto;
//       margin-bottom: 15px;
//       border-radius: 5px;
//       border: 1px solid;
//     }
//     input::placeholder {
//       font-size: 14px;
//       font-family: Roboto;
//     }
//     input:focus-visible {
//       outline: unset;
//     }
//     input[type="submit"] {
//       display: inline-block;
//       padding: 0 35px;
//       border-radius: 5px;
//       border: unset;
//       background: #ea4c89;
//       color: #fff;
//       width: unset;
//       font-family: Poppins;
//       font-weight: bold;
//       cursor: pointer;
//     }
//   }
//   div {
//     h1 {
//       font-family: Poppins;
//       color: #7a5c15;
//       font-size: 28px;
//       letter-spacing: 0.6px;
//       line-height: 38px;
//       text-align: left;
//       font-weight: 400;
//     }
//   }
// }
// .rightSection {
//   background: #fff;
//   float: right;
// }
// .leftSection {
//   background-color: #f2d184;
//   float: left;
// }
// @media only screen and (min-width: 280px) and (max-width: 1023px) {
//   .loginForm {
//     width: 100%;
//   }
//   .leftSection {
//     display: none;
//   }
//   .rightSection {
//   padding: 0 15px;
//   }
// }

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RouteConfig } from '../Configure/RouteConfig'
import Home from './Home/index'
import RouterService from '../Service/RouterService'


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter ref={RouterService.setBrowserHistoryRef}>
                <Switch>
                    <Route exact path={RouteConfig.LANDING} component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;
