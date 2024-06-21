'use client'
import React from "react";

const page = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image: e.target.image.value,
    }
    const res = await fetch('http://localhost:3000/api/auth/signup/new-user', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(res);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="space-y-3">
        <div >
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="outline-none border-2 p-3 text-slate-700"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="text"
            name="email"
            placeholder="your email"
            className="outline-none border-2 p-3 text-slate-700"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            name="password"
            placeholder="your password"
            className="outline-none border-2 p-3 text-slate-700"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label><br />
          <input
            type="text"
            name="image"
            placeholder="your image"
            className="outline-none border-2 p-3 text-slate-700"
          />
        </div>
        <button type="submit" className="bg-orange-500 p-3">Register</button>
      </form>
    </div>
  );
};

export default page;
