import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  if (!user.name) return;
  return (
    <div
      style={{
        color: theme,
      }}
    >
      <h1>Profile</h1>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>Email:{user.email}</h1>
    </div>
  );
}
