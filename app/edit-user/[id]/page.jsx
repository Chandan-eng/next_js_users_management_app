import EditUserForm from "@/components/EditUserForm";

const getUser = async (id) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function EditUser({params}) {
const { id } = params;
const user = await getUser(id);
console.log(user?.user);
    return (
   <EditUserForm userData={user?.user}/>
    );
    }