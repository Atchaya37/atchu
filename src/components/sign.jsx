import React from 'react';
import './sign.css';

 function Sign() {
  return (
<>
    <div class="sign-up-container">
        <h2>Sign Up</h2>
        <form id="sign-up-form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
   </>
  );
}
export default Sign;