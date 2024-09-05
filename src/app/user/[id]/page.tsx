'use client'

import { useEffect, useState } from "react"


  const UserInfoPage = ({ params }: { params: { id: string } }) => {
    const [userinfo, setUserinfo] = useState<any>(null);

console.log(userinfo)



useEffect(()=>{

  const id = params.id;
console.log(id)
async function getUser(id:string) {

  const data =await fetch(`https://dummyjson.com/users/${id}`)
setUserinfo(await data.json())
  
}

getUser(id)

},[params.id])



if (!userinfo) {
  return <div>Loading...</div>;
}

return (
  <div>
    <h1>User Profile</h1>
    <p>Username: {userinfo.username}</p>
    <p>First Name: {userinfo.firstName}</p>
    <p>Last Name: {userinfo.lastName}</p>
    
  </div>
)

}
export default UserInfoPage