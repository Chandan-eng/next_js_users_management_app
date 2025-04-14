export default function EditUserForm() {
    return (
        <div className="p-4 mt-2 border border-gray-200">
        <h2 className="font-bold text-2xl">Edit User</h2>
        <form className="flex flex-col gap-4 mt-4">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name" name="name" className="p-2 border border-gray-300" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="p-2 border border-gray-300" />
            <button className="bg-blue-500 text-white p-2 rounded">Update User</button>
        </form>
        </div>
    );
    }