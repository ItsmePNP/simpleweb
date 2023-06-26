// import mongoose from "mongoose";

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//   } catch (error) {
//     throw new Error("Connection failed!");
//   }
// };

// export default connect;

import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Connection failed:", error);
  }
};

export default connect;
