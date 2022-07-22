import { useReducer } from "react"
import { loginService } from "../services/userServices"
import GlobalContext from "./GlobalContext"
import GlobalReducer from "./GlobalReducer"

const GlobalState = ({ children }) => {
  console.log(children)
  const initialState = {
    error: null,
    status: null,
    token: null
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const loginUser = async (email, password) => {
    const data = await loginService({ email, password })
    dispatch({
      type: 'LOGIN_USER',
      payload: data
    })
    return data
  }
  const getToken = () => {
    dispatch({
      type: 'GET_TOKEN',
      payload: ''
    })
    return state
  }

  return (
    <GlobalContext.Provider value={
      {
        error: state?.error,
        statusCode: state?.statusCode,
        token: state?.body,
        loginUser,
        getToken
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState