import { useContext } from "react"
import Post from "../componentes/Post/Post"
import GlobalContext from "../context/GlobalContext"
import { useFetch } from "../hooks/useFetch"
export default function Wall() {

  const { getToken } = useContext(GlobalContext)
  const token = getToken()

  const data = useFetch({
    url: 'http://localhost:4000/post/get',
    token: token.state.body,
    method: 'GET',
    onSuccess: false
  })

  return (
    <>

      {data && <div>
        {data.map(post => {
          return (
            <Post key={post.postId} post={post} />
          )
        })}
      </div>}
    </>
  )
}