"use client";

import { UAParser } from "ua-parser-js";

export default function Home() {
  if (typeof window === "undefined") return null;

  const { getBrowser, getDevice, getCPU, getEngine, getOS } = new UAParser(
    window.navigator.userAgent
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono">{`getBrowser: ${JSON.stringify(
            getBrowser()
          )}`}</code>
          <code className="font-mono">{`getDevice: ${JSON.stringify(
            getDevice()
          )}`}</code>
          <code className="font-mono">{`getCPU: ${JSON.stringify(
            getCPU()
          )}`}</code>
          <code className="font-mono">{`getEngine: ${JSON.stringify(
            getEngine()
          )}`}</code>
          <code className="font-mono">{`getOS: ${JSON.stringify(
            getOS()
          )}`}</code>
        </p>
      </div>
    </main>
  );
}
