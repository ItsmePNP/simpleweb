// import { NextResponse } from "next/server";
// import connect from "@/utils/db";
// import Post from "@/models/Post";

// export const GET = async (request) => {
//   try {
//     await connect();
//     const posts = await Post.find();
//     return NextResponse.json({ posts });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect(); // Call the connect function before executing the query
    const posts = await Post.find();
    return NextResponse.json({ posts });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
