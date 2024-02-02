
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const [axiosSecure] = useAxios();
    const {user, loading} = useContext(AuthContext);
    // console.log({user: user?.email});

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data, "aaaaaa");
            return res?.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;