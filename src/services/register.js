const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

const register = ({ username, password }) =>
  fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })

export default register
