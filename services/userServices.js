import { CHECK_SESSION, LOGIN_URL, LOG_OUT_SESSION, REGISTER_URL } from '../config/calls/userCalls'

export const loginService = async (data) => {
  const request = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    credentials: 'include',

    body: JSON.stringify(data)
  })
  const response = await request.json()
  return response
}

export const checkSession = async () => {
  try {
    const request = await fetch(CHECK_SESSION,
      {

        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        credentials: 'include'
      })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const logoutSession = async () => {
  try {
    const request = await fetch(LOG_OUT_SESSION, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      credentials: 'include'
    })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
