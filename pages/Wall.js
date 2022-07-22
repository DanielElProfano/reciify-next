import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"
import { getAllPost } from "../services/postServices"

export default function Wall() {

  const { getToken } = useContext(GlobalContext)
  useEffect(() => {
    const getPost = async () => {
      const data = getToken()
      const token = data.state.body
      const post = await getAllPost(
        { userId: '2afa828b-3faa-4a82-b1be-c2517d0fc932' },
        token
      )
      console.log(post)
    }
    console.log("wall")

    getPost()
  }, [])
  return (
    <div>
      Wall
    </div>
  )
}
