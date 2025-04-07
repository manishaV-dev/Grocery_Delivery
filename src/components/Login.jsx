import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setShowUserLogin, setUser } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({
      email: "test@greencart.com",
      name: "GreenCart",
    });
    setShowUserLogin(false);
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-primary-dull text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          {state === "login"
            ? "Please sign in to continue"
            : "Please sign up to continue"}
        </p>

        {state === "register" && (
          <div className="w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-primary transition-colors">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div
          className={` ${
            state === "register" ? "mt-4" : "mt-10"
          } w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-primary transition-colors`}
        >
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-primary transition-colors">
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-primary hover:bg-primary-dull transition-opacity cursor-pointer"
        >
          {state === "register" ? "Register" : "Login"}
        </button>

        {state === "register" ? (
          <p className="text-gray-500 text-sm mt-3 mb-11">
            Already have an account{" "}
            <Link
              className="text-primary-dull"
              onClick={() => setState("login")}
            >
              Sign In
            </Link>
          </p>
        ) : (
          <p className="text-gray-500 text-sm mt-3 mb-11">
            Don’t have an account?{" "}
            <Link
              className="text-primary-dull"
              onClick={() => setState("register")}
            >
              Sign up
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
