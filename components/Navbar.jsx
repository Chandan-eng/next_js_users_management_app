import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between space-x-4 p-4 bg-gray-800 text-white font-bold mt-4">
            <Link href="/" className="text-white">User App</Link>
            <Link href="/add-user" className="bg-white p-2 text-black">Add User</Link>
        </nav>
    );
    }