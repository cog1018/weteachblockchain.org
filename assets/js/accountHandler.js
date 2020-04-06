
/* 2️⃣ Initialize Magic Instance */
const magic = new Magic("pk_live_EA466C1563BC5CFF");

/* 3️⃣ Implement Render Function */
const renderLogin = async () => {
  console.log('render triggered')
  const isLoggedIn = await magic.user.isLoggedIn();
  /* Show login form if user is not logged in */
  let html = `
    <form onsubmit="handleLogin(event)">
      <span>Enter your email below to log in.</span>
      <input class="emailInput" type="email" name="email" required="required" placeholder="Enter your email" />
      <button  class="learnMoreButton callToAction logout"  type="submit">Send</button>
    </form>
  `;
  if (isLoggedIn) {
    /* Get user metadata including email */
    const userMetadata = await magic.user.getMetadata();
    console.log(userMetadata)
    html = `
      <h1>You are now logged in as ${userMetadata.email}</h1>
      <button class="learnMoreButton callToAction logout" onclick="handleLogout()">Logout</button>
      <a href="/courses/"><button  class="learnMoreButton callToAction courses">Courses</button></a>
    `;
  }
  document.getElementById("app").innerHTML = html;
};

/* 4️⃣ Implement Login Handler */
const handleLogin = async e => {
  e.preventDefault();
  const email = new FormData(e.target).get("email");
  if (email) {
    /* One-liner login 🤯 */
    await magic.auth.loginWithMagicLink({ email });
    render();
  }
};

/* 5️⃣ Implement Logout Handler */
const handleLogout = async () => {
  await magic.user.logout();
  render();
};

