import connectMongoDB from "@/libs/mongodb";
import User from "@/modals/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  console.log(id);
  
  const { newUserName: userName, newEmail: email } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { userName, email });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}