'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserForm({userData}) {
    const router = useRouter();
    const [user, setUser] = useState({ newUserName: userData.userName, newEmail: userData.email });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const res = await fetch(`http://localhost:3000/api/users/${userData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        router.push("/");
    }
    return (
        <div className="p-4 mt-2 border border-gray-200">
        <h2 className="font-bold text-2xl">Edit User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name" name="name"
             value={user.newUserName}
            onChange={(e) => setUser({ ...user, newUserName: e.target.value })}
            className="p-2 border border-gray-300" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
            value={user.newEmail}
            onChange={(e) => setUser({ ...user, newEmail: e.target.value })}
            className="p-2 border border-gray-300" />
            <button className="bg-blue-500 text-white p-2 rounded">Update User</button>
        </form>
        </div>
    );
    }