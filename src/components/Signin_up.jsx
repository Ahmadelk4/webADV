// import React, { useState } from "react";
// import "../CSS/Signin_up.css";
// import { useNavigate } from "react-router-dom";

// export default function Signin_up({ isModal }) {
//   const [isLoginVisible, setIsLoginVisible] = useState(true);
//   const [isRegisterVisible, setIsRegisterVisible] = useState(false);

//   const toggleViewLogin = () => {
//     setIsLoginVisible(!isLoginVisible);
//     setIsRegisterVisible(!isRegisterVisible);
//   };

//   const toggleViewRegister = () => {
//     setIsRegisterVisible(!isRegisterVisible);
//     setIsLoginVisible(!isLoginVisible);
//   };
//   const navigate = useNavigate();

//   const handleCloseModal = () => {
//     navigate(-1);
//   };
//   return (
//     <div className={`signin_up-modal ${isModal ? "modal-open" : ""}`}>
//       <div className="modal-overlay" onClick={handleCloseModal}></div>
//       <div className="Signin_up">
//         <div className="main">
//           <div className={`register ${!isLoginVisible ? "active" : ""}`}>
//             <form>
//               <button
//                 type="button"
//                 onClick={toggleViewRegister}
//                 className="toggle-btn"
//               >
//                 Login
//               </button>
//               <input type="text" name="txt" placeholder="User name" required />
//               <input type="email" name="email" placeholder="Email" required />
//               <input
//                 type="number"
//                 name="Number"
//                 placeholder="phone Number"
//                 required
//               />
//               <input
//                 type="password"
//                 name="pswd"
//                 placeholder="Password"
//                 required
//               />
//               <button type="submit">Sign up</button>
//             </form>
//           </div>
//           <div className={`login ${isRegisterVisible ? "active" : ""}`}>
//             <form>
//               <button
//                 type="button"
//                 onClick={toggleViewLogin}
//                 className="toggle-btn"
//               >
//                 Sign up
//               </button>
//               <input type="email" name="email" placeholder="Email" required />
//               <input
//                 type="password"
//                 name="pswd"
//                 placeholder="Password"
//                 required
//               />
//               <button type="submit">Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import "../CSS/Signin_up.css";
import { useNavigate } from "react-router-dom";

export default function Signin_up({ isModal }) {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const toggleViewLogin = () => {
    setIsLoginVisible(!isLoginVisible);
    setIsRegisterVisible(!isRegisterVisible);
  };

  const toggleViewRegister = () => {
    setIsRegisterVisible(!isRegisterVisible);
    setIsLoginVisible(!isLoginVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost//webadv/backend/signup.php",
        formData
      );
      alert(response.data.message);
      if (response.data.success) {
        setIsLoginVisible(true);
        setIsRegisterVisible(false);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost//webadv/backend/login.php",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      alert(response.data.message);
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <div className={`signin_up-modal ${isModal ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="Signin_up">
        <div className="main">
          <div className={`register ${!isLoginVisible ? "active" : ""}`}>
            <form onSubmit={handleSignup}>
              <button
                type="button"
                onClick={toggleViewRegister}
                className="toggle-btn"
              >
                Login
              </button>
              <input
                type="text"
                name="username"
                placeholder="User name"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <div className={`login ${isRegisterVisible ? "active" : ""}`}>
            <form onSubmit={handleLogin}>
              <button
                type="button"
                onClick={toggleViewLogin}
                className="toggle-btn"
              >
                Sign up
              </button>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
