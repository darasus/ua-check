import { IResult, UAParser } from "ua-parser-js";

import { isWebView as _isWebView } from "./isWebview";

export function parseUserAgent(): Pick<IResult, "browser" | "os"> | undefined {
  try {
    const userAgent =
      typeof window !== "undefined" ? window.navigator.userAgent : "";
    const parser = new UAParser(userAgent);

    return { browser: parser.getBrowser(), os: parser.getOS() };
  } catch {
    return undefined;
  }
}

// OS
export const isIos = parseUserAgent()?.os.name === "iOS";
export const isAndroid = parseUserAgent()?.os.name === "Android";

// Browser
export const isMobileSafari =
  parseUserAgent()?.browser.name === "Mobile Safari";
export const isChrome = parseUserAgent()?.browser.name === "Chrome";

// WebView
export { isWebView } from "./isWebview";
export const isIosWebView = isIos && _isWebView;
export const isAndroidWebView = isAndroid && _isWebView;
