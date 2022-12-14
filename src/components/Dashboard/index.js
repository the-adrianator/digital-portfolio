import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from "../Login";
import DashboardHome from "./dashboardHome";

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [])

    return (
        <div>
            {user ? <DashboardHome /> : <Login />}
        </div>
    )
}

export default Dashboard;