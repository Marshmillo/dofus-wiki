import React, { useState } from "react";
export const login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <form>
      <label for="email">email</label>
      <input type="email" placeholder="tuemail@gmail.com" id="email" name="email" />
      <label for="email">password</label>
      <input type="password" placeholder="********" id="password" name="password" />
      <button>Log In</button>
    </form>
  )
}