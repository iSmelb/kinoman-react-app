import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userSlice";

export const useAddUser = (user) => {
    const dispath = useDispatch()
    
    useEffect(() => {
        if (user) {
            const userInfo = {
                email: user?.email,
                name: user?.displayName,
                avatar: user?.photoURL
            }
            dispath(addUser(userInfo));
        }
    }, [user])
}
