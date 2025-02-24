import React, { useContext, useState } from 'react';
import { GrGoogle } from 'react-icons/gr';
import { AuthContext, useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {

  // const { signInWithGoogle } = useContext(AuthContext);
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  if (user) {
      navigate('/');
      return null; // Redirect logged-in users
  }

    const handleGoogleSignIn = async () => {
      try {
          await signInWithGoogle();
          navigate('/');
      } catch (error) {
          console.error("Google Sign-In Error:", error.message);
      }
  };
  


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="">

    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
    <p>Login with</p>
    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent flex items-center">
        <GrGoogle className="mr-2" /> Google
    </button>
</div>

      </form>
    </div>
  </div>
</div>
    );
}

export default Login;