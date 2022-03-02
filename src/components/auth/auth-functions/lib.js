const apiKey = "AIzaSyCGRhztAmgHliENwqPNjse97X8lzdP8jeI";
export async function signInRequest(creds) {
  let response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
        returnSecureToken: true,
      }),
      headers: { "content-Type": "application/json" },
    }
  );

  let data = await response.json();

  return data;
}

export async function loginRequest(creds) {
  let response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
        returnSecureToken: true,
      }),
      headers: { "content-Type": "application/json" },
    }
  );
  let data = await response.json();
  return data
}
