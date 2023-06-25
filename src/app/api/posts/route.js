import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    console.log("Before database connection");
    await connect();
    console.log("After database connection");
    return new NextResponse(JSON.stringify(posts), { status: 200 });
    // Rest of the code...
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("err");
  }
};

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("err");
  }
};


