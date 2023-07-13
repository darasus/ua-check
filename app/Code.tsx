"use client";

import { ReactNode } from "react";
import { UAParser } from "ua-parser-js";
import {
  isWebView,
  isAndroid,
  isAndroidWebView,
  isChrome,
  isIos,
  isIosWebView,
  isMobileSafari,
} from "./parseUserAgent";

function PreviewCode({ children }: { children: ReactNode }) {
  return <code className="font-mono border rounded-md p-4">{children}</code>;
}

export default function Code() {
  if (typeof window === "undefined") return null;

  const { getBrowser, getDevice, getCPU, getEngine, getOS } = new UAParser(
    window.navigator.userAgent
  );

  const items = [
    ["isWebView", () => isWebView],
    ["isIosWebView", () => isIosWebView],
    ["isAndroidWebView", () => isAndroidWebView],
    ["isAndroid", () => isAndroid],
    ["isChrome", () => isChrome],
    ["isIos", () => isIos],
    ["isMobileSafari", () => isMobileSafari],
    ["getBrowser", getBrowser],
    ["getDevice", getDevice],
    ["getCPU", getCPU],
    ["getEngine", getEngine],
    ["getOS", getOS],
  ] as const;

  return (
    <main className="flex">
      <div className="w-full">
        <div className="flex flex-col gap-4 p-4">
          <PreviewCode>{`UA: ${window.navigator.userAgent}`}</PreviewCode>
          {items.map(([name, f], index) => {
            const data = f();

            return (
              <PreviewCode key={index}>
                {name}: {JSON.stringify(data, null, 2)}
              </PreviewCode>
            );
          })}
        </div>
      </div>
    </main>
  );
}
