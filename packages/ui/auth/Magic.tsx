import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import * as logger from "npmlog";

let magic: any = null;
logger.enableColor();

// Create client-side Magic instance
const createMagicClient = (key: string) => {
  if (typeof window === "undefined") {
    logger.error(
      `Magic:createMagicClient`,
      "Window is required to create magic client instance."
    );
    return null;
  }

  magic = new Magic(key, {
    extensions: [new OAuthExtension()],
  });

  return magic;
};

export const magicClient = (key: string) => createMagicClient(key);