import dynamic from "next/dynamic";

const LazyCode = dynamic(() => import("./Code"), { ssr: false });

export default function Home() {
  return <LazyCode />;
}
