import App from "@/components/App";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

export default function Home() {
  return (
    <div className="mx-auto w-11/12">
      <Editor content="<h1>Hello, Next! - CK" />
      <App />
    </div>
  );
}
