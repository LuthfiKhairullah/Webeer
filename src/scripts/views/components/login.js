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
                <p class="fs-6">You don't have an account yet? <span> <a href="#/register" id="sign-up-link">Sign Up </a></span> </p>
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
                <button type="submit" class="btn mb-3 w-100 text-light p-3" style="background-color:#344D67;">Login</button>
                </form>
                <a href="#/resetpwd" id="forget-pwd"> Forget Password </a>
            </div>
        </div>
    </div>
</div>

`;
    document.querySelector('#sign-up-link').addEventListener('click', () => {
      setTimeout(() => document.location.reload('#/register'), 500);
    });
    document.querySelector('#forget-pwd').addEventListener('click', () => {
      setTimeout(() => document.location.reload('#/resetpwd'), 500);
    });
  }
}
customElements.define('login-modal', Login);