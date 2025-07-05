import { useState } from "react";

const inputStyles = `focus:border-red border border-gray-200 px-4 py-2 w-full rounded-md outline-none`;

export default function LoginModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [classType, setClassType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && (!name || !classType))) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simple dummy login validation
    if (isLogin) {
      if (email === "utpal@gmail.com" && password === "123456") {
        alert("Login successful!");
        onClose();
      } else {
        alert("Incorrect email or password.");
      }
    } else {
      alert(`Welcome ${name}! You have registered for ${classType}.`);
      setIsLogin(true);
      // Optionally reset form
      setEmail("");
      setPassword("");
      setName("");
      setClassType("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red text-2xl"
        >
          &times;
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold uppercase text-gray-800">
          {isLogin ? "Member Login" : "Join the Gym"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className={inputStyles}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className={inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={inputStyles}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isLogin && (
            <select
              className={inputStyles}
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
            >
              <option value="" disabled>
                Select Class
              </option>
              <option>Body Building</option>
              <option>Cycling</option>
              <option>Meditation</option>
              <option>Workout</option>
              <option>Karate</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-red py-2 font-semibold uppercase text-white hover:bg-red-600 transition"
          >
            {isLogin ? "Login Now" : "Register Now"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          {isLogin ? "New member?" : "Already registered?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-red font-bold hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
