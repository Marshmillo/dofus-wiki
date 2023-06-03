import React, { useState } from "react";
export const login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="email">email</label>
      <input value={email} type="email" placeholder="tuemail@gmail.com" id="email" name="email" />
      <label for="email">password</label>
      <input value={pass} type="password" placeholder="********" id="password" name="password" />
      <button>Log In</button>
    </form>
    <button>Aún no tienes una cuenta? Registrate</button>
    </>
  )
}