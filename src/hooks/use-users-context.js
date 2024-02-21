import { useContext } from "react";
import UsersContext from "../context/users";

function useBooksContext() {
    return useContext(UsersContext)
}

export default useBooksContext;