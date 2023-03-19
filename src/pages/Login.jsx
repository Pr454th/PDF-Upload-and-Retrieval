import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Login() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const setUser = () => {
    dispatch(
      login({
        name: name,
        age: age,
        email: email,
      })
    );
  };
  const clearUser = () => {
    dispatch(logout());
  };
  return (
    <div>
      {!user.name && (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
      )}

      {!user.name ? (
        <button className="btn btn-outline-primary" onClick={setUser}>
          Login
        </button>
      ) : (
        <button className="btn btn-danger" onClick={clearUser}>
          Logout
        </button>
      )}
    </div>
  );
}
