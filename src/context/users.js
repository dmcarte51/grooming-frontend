import { createContext, useState } from "react";
import axios from "axios";


const UsersContext = createContext();

function UsersProvider({ children }) {

    const [user, setUser] = useState({})

    // const [auth, setAuth] = useState({
    //     username,
    //     password
    // })

    const createUser = async (user) => {
        const response = await axios.post("http://localhost:8080/users/register", user)
    }
    // auth is a username and password
    //TODO: set up GET method in backend to take a username and password
    // const getUser = async (auth) => {
    //     const response = await axios.get(``)
    // }
}

export { UsersProvider }

export default UsersContext;