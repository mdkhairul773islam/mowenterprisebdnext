import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [
      [{ header: [2, 3, 4, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  },
  clipboard: {
    matchVisual: true,
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "clean",
];

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      className="h-48"
      theme="snow"
      value={value}
      onChange={onChange}
    />
  );
};

export default RichTextEditor;
