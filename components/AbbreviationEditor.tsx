"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditorInstance from "ckeditor5-custom-build";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import Abbreviation from "./Abbreviation/abbreviation";

export default function AbbreviationEditor({ content }: { content: string }) {
  console.log("CkEditor>>>", { CKEditor });
  return (
    <CKEditor
      editor={EditorInstance}
      data={content}
      //   config={{ plugins: [Abbreviation] }}
    />
  );
}
