import { isIos } from ".";

const rules = [
  // If it says it's a webview, let's go with that
  "WebView",
  // IOS webview will be the same as safari but missing "Safari"
  "(iPhone|iPod|iPad)(?!.*Safari)",
  // Android Lollipop and Above: webview will be the same as native but it will contain "wv"
  // Android KitKat to Lollipop webview will put Version/X.X Chrome/{version}.0.0.0
  "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})",
  // Old chrome android webview agent
  "Linux; U; Android",
];

const webviewRegExp = new RegExp(`(${rules.join("|")})`, "igu");

function getIsWebView(): boolean {
  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "";

  return Boolean(webviewRegExp.test(userAgent));
}

export const isWebView = getIsWebView();
