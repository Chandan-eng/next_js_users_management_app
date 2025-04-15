"use client"
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}) {
    const router = useRouter();
    const handleDeleteUser = async () => {
        if (confirm("Are you sure you want to delete this user?")) {
            const res = await fetch(`http://localhost:3000/api/users/?id=${id}`, {
                method: "DELETE",
            });
           if(res.ok){
            alert("User deleted successfully");
            router.refresh();
           }
        }
    };
    return (
        <button className="text-red-500" onClick={handleDeleteUser}>
            <HiOutlineTrash size={24} color="error"/>
        </button>
    );
}