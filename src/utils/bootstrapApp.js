async function bootstrapApp() {
  const data = JSON.parse(window.localStorage.getItem('userData'));

  if (!data) {
    return { email: null, token: null };
  }

  const { email, token } = data;

  return {
    email,
    token
  };
}

export { bootstrapApp };
