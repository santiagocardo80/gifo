const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

const addFav = ({ id, jwt }) =>
  fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ jwt })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => res.favs)

export default addFav
