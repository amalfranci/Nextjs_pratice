'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import useSWR from "swr"



const UserPage=()=>{


const fetcher = (...args)=>fetch(...args).then(res=>res.json()) 

    // useEffect(()=>{

    //     async function fethUsers() {
    //         const data = await fetch('https://dummyjson.com/users')
    //         setUsers(await data.json())
            
    //     }
    //     fethUsers()
    // },[])

    const {data,error}= useSWR("https://dummyjson.com/users",fetcher)
    console.log("users list",data)
 if(error){
    return <h1>Error Happend</h1>
 }



    return(
        <div>
         {data && data.users && data.users.map((user)=>(
            <Link href={`/user/${user.id}`} key={user.id}> <div>{user.firstName}</div></Link>

         ))}
        </div>
    )
}
export default UserPage