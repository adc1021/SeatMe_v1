import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UsersShow = () => {
  const userId = useParams();
  console.log(userId)
  return (

    <>
    <h1>Hello from the Users Show Page</h1>
    {/* <p>{user.firstName}</p> */}
    </>
  )
}

export default UsersShow;
