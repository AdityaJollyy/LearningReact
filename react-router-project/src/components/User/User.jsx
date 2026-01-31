import { useParams } from "react-router"

function User() {
  const { userId } = useParams()
  return (
    <div className="flex justify-center items-center bg-gray-600/40 p-4 rounded text-2xl font-semibold">User: {userId}</div>
  )
}

export default User