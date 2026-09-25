import ImageKit, { toFile } from "@imagekit/nodejs";
import { config } from "../config/config.js";

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

/**
 * @description Uploads a file to imagekit
 * @param {object} buffer - Buffer of the file
 * @param {string} fileName - Name of the file
 * @returns {object} - Response from imagekit
 */
export const uploadFile = async ({ buffer, fileName }) => {
  const response = await client.files.upload({
    file: await toFile(buffer),
    fileName: fileName,
    folder: "snitch",
  });

  return response;
};
