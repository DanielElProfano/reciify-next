export default function Wall() {
  const local = JSON.parse(localStorage.getItem('user'))
  console.log(local)

  return (
    <div>
      Wall
    </div>
  )
}
