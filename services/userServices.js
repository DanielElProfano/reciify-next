import { LOGIN_URL, LOG_OUT_SESSION, REGISTER_URL } from '../config/calls/userCalls'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

export const loginService = async (data) => {
  const request = await fetch(LOGIN_URL, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: JSON.stringify(data)
  })
  const response = await request.json()
  return response
}

export const registerService = async (data) => {
  debugger
  const request = await fetch(REGISTER_URL, {
    method: 'POST',
    headers,
    credentials: 'include',

    body: JSON.stringify(data)
  })
  const response = await request.json()
  return response
}

export const logoutSession = async () => {
  try {
    const request = await fetch(LOG_OUT_SESSION, {
      method: 'POST',
      headers,
      credentials: 'include'
    })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
