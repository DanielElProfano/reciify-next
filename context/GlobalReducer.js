import { LOGIN_USER, GET_USER, GET_TOKEN } from "./types";

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER:
      console.log('login reducer')
      state = payload
      return { state }
    case GET_TOKEN:
      console.log('token reducer')
      return state
  }
}