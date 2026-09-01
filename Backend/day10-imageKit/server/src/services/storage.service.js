import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const storageInstance = new ImageKit({
  privateKey: process.env.IK_PRIVATE_KEY,
  publicKey: process.env.IK_PUBLIC_KEY,
  urlEndpoint: process.env.IK_URL_ENDPOINT,
});

export const sendFiles = async (file, fileName) => {
  const obj = {
    file: file.toString("base64"),
    fileName,
    folder: "cohort-test",
  };

  const result = await storageInstance.files.upload(obj);

  return result;
};
