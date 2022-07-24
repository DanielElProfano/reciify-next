import { useEffect, useState } from "react";

const HEADER =
{
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,

}
export const useFetch = (options) => {

  const [data, setData] = useState(null)
  useEffect(() => {
    fetching()
  }, [])

  const fetching = async () => {
    console.log("fetching")
    const request = await fetch(options.url, {
      method: options.method,
      headers: { ...HEADER, 'Authorization': `Bearer ${options.token}` },
      credentials: 'include'
    })
    const response = await request.json()
    setData(response.body)
  }
  return data
}
