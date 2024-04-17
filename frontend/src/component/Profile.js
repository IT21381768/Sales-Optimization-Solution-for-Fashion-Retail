import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profilepage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            const userId = JSON.parse(localStorage.getItem("user"))._id;
            try {
                const { data } = await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }//sdasd
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem("token");
        // Optionally perform additional cleanup tasks
        // For example, clear user data from state
        setUser(null);
    };
  return (
    <div>
            {user && (
                <div>
                  <h1>jbjh</h1>
                  <h1>jbjh</h1>
                  <h1>jbjh</h1>
                  <h1>jbjh</h1>
                    <h2>Welcome, {user.firstName}</h2>
                    <p>Email: {user.email}</p>
                    <button className="btn btn-success" onClick={handleLogout}>Log Out</button>
                </div>
            )}
        </div>
  )
}
