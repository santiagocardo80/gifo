const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

const login = ({ username, password }) =>
  fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => res.jwt)

export default login
