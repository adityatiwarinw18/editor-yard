"use client";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

// import { createRoot } from "react-dom/client";

// // The official CKEditor&nbsp;5 instance inspector. It helps understand the editor view and model.
// import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
// // The base editor class and features required to run the editor.
// import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
// import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
// import { Essentials } from "@ckeditor/ckeditor5-essentials";
// import { Heading } from "@ckeditor/ckeditor5-heading";
// import { Link } from "@ckeditor/ckeditor5-link";
// import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
// import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";

// CKEditor plugin implementing a product widget to be used in the editor content.
import ProductPreviewEditing from "./CKEditor/productpreviewediting";

// React components to render the list of products and the product preview.
import ProductPreview from "./ProductPreview";

import ProductList from "./ProductList";
// import Editor from "./Editor";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditorInstance from "ckeditor5-custom-build";

const products = [
  {
    id: 1,
    name: "Colors of summer in Poland",
    price: "$1500",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Mediterranean sun on Malta",
    price: "$1899",
    image: "product2.jpg",
  },
  {
    id: 3,
    name: "Tastes of Asia",
    price: "$2599",
    image: "product3.jpg",
  },
  {
    id: 4,
    name: "Exotic India",
    price: "$2200",
    image: "product4.jpg",
  },
];

export default function App() {
  const editorData = `
                <h2>Check our last minute deals!</h2>

                <p>Aenean erat conubia pretium libero habitant turpis vivamus dignissim molestie, phasellus libero! Curae; consequat cubilia mattis. Litora non iaculis tincidunt.</p>
                <section class="product" data-id="2">&nbsp;</section>
                <p>Mollis gravida parturient ad maecenas euismod consectetur lacus rutrum urna eget ligula. Nisi imperdiet scelerisque natoque scelerisque cubilia nulla gravida. Eleifend malesuada pharetra est commodo venenatis aenean habitasse curae; fusce elit.</p>
                <section class="product" data-id="1">&nbsp;</section>

                <h3>Other deals</h3>
                <p>Ultricies dapibus placerat orci natoque fames commodo facilisi sollicitudin. Sed hendrerit mi dis non lacinia ipsum. Luctus fames scelerisque auctor pellentesque mi nunc mattis, amet sapien.</p>

                <figure class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Our deal</th>
                                <th>Why this one?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <section class="product" data-id="3">&nbsp;</section>
                                </td>
                                <td>Nascetur, nullam hac nibh curabitur elementum. Est ridiculus turpis adipiscing erat maecenas habitant montes. Curabitur mauris ut luctus semper. Neque orci auctor luctus accumsan quam cursus purus condimentum dis?</td>
                            </tr>
                            <tr>
                                <td>
                                    <section class="product" data-id="4">&nbsp;</section>
                                </td>
                                <td>Elementum condimentum convallis porttitor cubilia consectetur cum. In pretium neque accumsan pharetra. Magna in quisque dignissim praesent facilisi diam. Ad habitant ultricies at faucibus. Ultricies auctor sodales massa nisi eget sem porta?</td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            `;
  const editorConfig = {
    plugins: [
      // A set of editor features to be enabled and made available to the user.
      //   Essentials,
      //   Heading,
      //   Bold,
      //   Italic,
      //   Underline,
      //   Link,
      //   Paragraph,
      //   Table,
      //   TableToolbar,
      // Your custom plugin implementing the widget is loaded here.
      //   ProductPreviewEditing,
    ],
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "link",
      "insertTable",
      "|",
      "undo",
      "redo",
    ],
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    // products: {
    //   productRenderer: (id, domElement) => {
    //     const product = products.find((product) => product.id === id);
    //     const root = createRoot(domElement);

    //     root.render(<ProductPreview id={id} {...product} />);
    //   },
    // },
  };

  const handleEditorDataChange = (editor) => {
    console.log("State changed inside editor>>>", {
      content: editor.getData(),
    });
  };
  const handleEditorReady = (editor) => {
    // CKEditorInspector.attach(editor);
  };

  return (
    <>
      <ProductList products={products} onClick={() => {}} />
      {/* <CKEditor
        editor={ClassicEditor}
        data={editorData}
        config={editorConfig}
        onChange={handleEditorDataChange}
        onReady={handleEditorReady}
      /> */}
      <CKEditor
        editor={EditorInstance}
        data={"Hello there!"}
        config={{
          plugins: [ProductPreviewEditing],
        }}
      />
    </>
  );
}
