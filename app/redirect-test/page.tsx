import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "http-equiv": "refresh",
    content:
      "0;url=intent://app.klarna.com#Intent;scheme=http;package=com.myklarnamobile;end;",
  },
};

export default function Page() {
  return <div>Redirecting...</div>;
}
