import React, { createContext, useEffect, useState } from 'react'
import Child from './Child'
import axios from 'axios'

export let context = createContext()
function UserList() {

    let [user,setUser] = useState([])
  

    useEffect(() => {
          async function api() {
        let { data } = await axios.get('https://dummyjson.com/users')
        setUser(data.users)
    }
        api()
    },[])

    return (
        <>
            <context.Provider value={user}>
                <Child />
            </context.Provider>

        </>
    )
}

export default UserList
