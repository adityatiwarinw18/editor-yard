"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditorInstance from "ckeditor5-custom-build";

export default function Editor({ content }: { content: string }) {
  console.log("CkEditor>>>", { CKEditor });
  return <CKEditor editor={EditorInstance} data={content} config={{}} />;
}
