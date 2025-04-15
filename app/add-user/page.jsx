"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
    const router = useRouter();
    const [user, setUser] = useState({ userName: "", email: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        console.log(data);
        router.push("/");
        router.refresh();
    }
    return (
        <div className="p-4 mt-2 border border-gray-200">
        <h2 className="font-bold text-2xl">Add User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name"
             name="name" 
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
             className="p-2 border border-gray-300" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email"
             name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="p-2 border border-gray-300" />
            <button className="bg-blue-500 text-white p-2 rounded">Add User</button>
        </form>
        </div>
    );
    }