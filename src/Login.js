import './Login.css';

function Login() {
  return (
    <div class="login-card">
    <h2>Login</h2>
    <h3>Enter your credentials</h3>
    <form class="login-form">
      <input type="text" id="clname" />
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button type="submit">LOGIN</button>
    </form>
  </div>
  );
}

export default Login;
