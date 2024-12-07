import { createContext, useState } from "react"


export const UserDataContect = createContext()


const UserContext = ({children}) => {

const [user, setUser] = useState({
    email:'',
    fullName:{
        firstName:'',
        lastName:'',
    }
})
  return (
    <div>
        <UserDataContect.Provider value={[user, setUser]}>
            {children}
        </UserDataContect.Provider>
    </div>
  )
}
export default UserContext