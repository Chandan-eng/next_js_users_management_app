import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const fetchList=async ()=>{
    try{
    const res = await fetch("http://localhost:3000/api/users").then(res=>res.json());
    console.log(res);
    if(!res) throw new Error("Failed to fetch data");
    return res;
    }
    catch(err){
        console.log("Something wrong!",err);
    }
}

export default async function UserList() {
    const users = await fetchList();
    console.log(users);
    return (
        <>
            {users?.map((user) => (
                <div key={user?._id} className="p-4 mt-2 border border-gray-200 flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-2xl">{user.userName}</h2>
                        <div>{user?.email}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={user._id}/>
                        <Link href={`/edit-user/${user?._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}