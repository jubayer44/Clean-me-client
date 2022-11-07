export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch("https://clean-me-server-jubayer44.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("clean-me", data.token);
    });
};
