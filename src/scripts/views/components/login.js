class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div id="container-login" style="text-align:center;">
        <div class ="container-login-main" id="card-login">
            <div>
            <img class="lazyload" src="./asset/hero-login.png">
            </div>
        <div>
        <form id="form-login">
        <p>You don't have an account yet? <span> <a href="#/register" id="sign-up-link">Sign Up</a> </span> </p>
          <div class="input-group mb-3" style="border-bottom:1px solid black;">
            <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
            <div class="form-floating">
              <input style="border:none;" type="email" class="form-control form-control-lg" id="emailUser" placeholder="Enter your email" required>
              <label for="emailUser">Email Address</label>
            </div>
          </div>
          <div class="input-group mb-3" style="border-bottom:1px solid black;">
            <span class="input-group-text" style="background-color:transparent; border:none;"><i class="fa fa-lock" aria-hidden="true"></i></span>
                <div class="form-floating">
                  <input style="border:none;" type="password" class="form-control form-control-lg" id="pwdUser" placeholder="Enter your password">
                  <label for="pwdUser">Password</label>
                </div>
          </div>
          <button type="submit" class="btn btn-primary mb-3">Login</button>
        </form>
        <p>Forgot password? <span> <button class="btn btn-sm border-0 pt-0 text-primary button-forgot-password" data-bs-toggle="modal" data-bs-target="#exampleModal">Forget Password</button> </span> </p>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
</div>
    </div>
  </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
`;
  }
}
customElements.define('login-modal', Login);