import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function UserList() {
    return (
        <div className="p-4 mt-2 border border-gray-200 flex justify-between items-center">
           <div>
            <h2 className="font-bold text-2xl">User Title</h2>
            <div>About User</div>
           </div>
           <div className="flex gap-2">
            <RemoveBtn/>
            <Link href="/edit-user/123">
            <HiPencilAlt size={24}/>
            </Link>
           </div>
        </div>
    );
}