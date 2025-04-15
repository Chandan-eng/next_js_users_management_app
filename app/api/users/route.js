import connectMongoDB from "@/libs/mongodb";
import User from "@/modals/user";
import { NextResponse } from "next/server";


//post method to create a new user

export async function POST(request) {
    const { userName, email } = await request.json();
    await connectMongoDB();
    await User.create({ userName, email });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  }

// GET method to fetch all users

export async function GET(){
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  }