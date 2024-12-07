import { useState } from "react";
import "./SignUp.css";
import { useLocation, useNavigate } from "react-router";
import { importImg } from "../../utils/importImg";

function SignUp() {
    const location = useLocation();
    const isSignIn = location.pathname === "/SignIn";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        usernameEmail: "",
        terms: false,
    });

    // console.log('XXXXXXXXX', getCookie('JWTToken'))

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const postRequest = async (url) => {
        try {
            let response = await fetch(url, {
                method: "POST", // HTTP method
                headers: {
                    "Content-Type": "application/json", // Inform the server about the data format
                },
                body: JSON.stringify(formData), // Convert the JavaScript object to JSON
                credentials: "include",
            });

            if (response.status == "200") {
                let data = await response.json();
                console.log(data);
                let userData = data.user;
                navigate("/");
                setFormData({
                    email: "",
                    password: "",
                });
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isSignIn) {
            const newErrors = {};

            if (!formData.name.trim()) newErrors.name = "Name is required.";
            if (!formData.username.trim())
                newErrors.username = "Username is required.";
            if (!formData.email.trim()) newErrors.email = "Email is required.";
            if (!formData.terms)
                newErrors.terms = "Please accept the privacy policy.";
            if (!/\S+@\S+\.\S+/.test(formData.email))
                newErrors.email = "Enter a valid email address.";
            if (!formData.password.trim())
                newErrors.password = "Password is required.";
            if (formData.password.length < 6)
                newErrors.password = "Password must be at least 6 characters long.";

            setErrors(newErrors);

            console.log(formData);
            await postRequest(
                "http://localhost:8000/userApi/signUp"
            );
            // try {
            //     const response = await axios.post("http://localhost:8000/set-cookieu", formData);
            //     console.log("Signup successful:", response);
            //     if (response.status == '200') {
            //         let userData = response.data.user;
            //         navigate('/')
            //         setFormData({
            //             name: "",
            //             email: "",
            //             password: "",
            //             reyTypePassword: "",
            //         })
            //     }
            // } catch (error) {
            //     console.error("Error signing up:",);
            // }
        } else {
            const newErrors = {};

            if (!formData.password.trim())
                newErrors.password = "Password is required.";
            if (!formData.usernameEmail.trim()) newErrors.usernameEmail = "Username or email is required.";

            setErrors(newErrors);

            // if (Object.keys(newErrors).length === 0) {
            //     console.log("Form submitted successfully", formData);
            // }
            await postRequest(
                "http://localhost:8000/userApi/signIn"
            );
        }
    };

    // const data1 = {
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     age: 25
    // };
    // const handelcoocki = async () => {
    //     // let response = await fetch('http://localhost:8000/set-cookie', {
    //     //     method: "GET",
    //     //     credentials: "include", // Include cookies in the request
    //     // })
    //     let response = await fetch('http://localhost:8000/set-cookie', {
    //         method: "POST", // HTTP method
    //         headers: {
    //             "Content-Type": "application/json", // Inform the server about the data format
    //         },
    //         body: JSON.stringify(data1), // Convert the JavaScript object to JSON
    //         credentials: "include",
    //     })

    //     // let data = response.json()

    //     // console.log(data.message)
    //     // axios
    //     //     .get("http://localhost:8000/set-cookie", {
    //     //         withCredentials: true, // Include cookies in the request
    //     //     })
    //     //     .then((response) => {
    //     //         console.log(response.data.message); // Confirm cookie is set
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error("Error setting cookie:", error);
    //     //     });
    // }

    return (
        <div className="signUpDiv">
            <div className="signUpLeft">
                <img
                    style={{ width: "80%" }}
                    src={importImg("Pasteimage")}
                    alt="sign up image"
                />
            </div>
            <div className=" signUpDivInner">
                {console.log(isSignIn)}
                {isSignIn ? (
                    <div className="signUpHeader">
                        <h1 style={{ color: "black" }}>Sign In</h1>
                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/SignUp")}>Sign Up</span>{" "}
                        </p>
                    </div>
                ) : (
                    <div className="signUpHeader">
                        <h1 style={{ color: "black" }}>Sign UP</h1>
                        <p>
                            Already have an account?{" "}
                            <span onClick={() => navigate("/SignIn")}>Sign In</span>{" "}
                        </p>
                    </div>
                )}
                <form className="form-container" onSubmit={handleSubmit}>
                    {!isSignIn && (
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <span className="error-message">{errors.name}</span>
                            )}
                        </div>
                    )}

                    {!isSignIn && (
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={formData.nausernameme}
                                onChange={handleChange}
                            />
                            {errors.username && (
                                <span className="error-message">{errors.username}</span>
                            )}
                        </div>
                    )}
                    {!isSignIn && <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>}

                    {isSignIn && <div className="form-group">
                        <input
                            type="text"
                            id="usernameEmail"
                            name="usernameEmail"
                            placeholder="Your username or email"
                            value={formData.usernameEmail}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <span className="usernameEmail">{errors.usernameEmail}</span>
                        )}
                    </div>}

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password}</span>
                        )}
                    </div>

                    {isSignIn ? <div className="signInForgot">
                        <div className="termsdiv">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.isChecked}
                                onChange={(e) =>
                                    setFormData({ ...formData, terms: e.target.checked })
                                }
                            />
                            <p>
                                Remember me

                            </p>
                        </div>

                        <p style={{ color: 'black', cursor: 'pointer', fontWeight: 'bold' }}>Forgot password</p>
                    </div> : <div className="form-group">
                        <div className="termsdiv">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.isChecked}
                                onChange={(e) =>
                                    setFormData({ ...formData, terms: e.target.checked })
                                }
                            />
                            <p>
                                I agree with <span>Privacy Policy</span> and{" "}
                                <span>Terms of Use</span>
                            </p>
                        </div>
                        {errors.terms && (
                            <span className="error-message">{errors.terms}</span>
                        )}
                    </div>}

                    <button type="submit" className="submit-button">
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
