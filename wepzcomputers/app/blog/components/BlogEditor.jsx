// components/BlogEditor.js
"use client";
import React, { useCallback, useMemo, useState } from "react";
import {
  createEditor,
  Transforms,
  Editor,
  Range,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, useSlate, withReact } from "slate-react";
import { useEffect } from "react";

// Toolbar component
const Toolbar = () => {
  const editor = useSlate();

  return (
    <div className="flex mb-4">
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          Transforms.toggleMark(editor, "bold");
        }}
        className="mr-2 p-2 bg-gray-300 rounded"
      >
        Bold
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          Transforms.toggleMark(editor, "italic");
        }}
        className="mr-2 p-2 bg-gray-300 rounded"
      >
        Italic
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          Transforms.setBlock(editor, { type: "heading-one" });
        }}
        className="mr-2 p-2 bg-gray-300 rounded"
      >
        H1
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          Transforms.setBlock(editor, { type: "heading-two" });
        }}
        className="mr-2 p-2 bg-gray-300 rounded"
      >
        H2
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          const url = window.prompt("Enter the URL of the image:");
          if (url) {
            Transforms.insertNodes(editor, {
              type: "image",
              url,
              children: [{ text: "" }],
            });
          }
        }}
        className="mr-2 p-2 bg-gray-300 rounded"
      >
        Image
      </button>
    </div>
  );
};

// Rendering components for different element types
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "image":
      return <img src={element.url} alt="Blog Image" {...attributes} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

// Main BlogEditor component
const BlogEditor = ({ onChange, initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [editorValue, setEditorValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  // Use initialValue if provided, otherwise use the default empty paragraph
  useEffect(() => {
    if (initialValue) {
      setEditorValue(initialValue);
    }
  }, [initialValue]);

  const handleChange = (newValue) => {
    setEditorValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Slate editor={editor} value={editorValue} onChange={handleChange}>
      <Toolbar />
      <Editable
        renderElement={(props) => <Element {...props} />}
        renderLeaf={(props) => <Leaf {...props} />}
        placeholder="Enter your text here..."
        className="border p-4 rounded"
      />
    </Slate>
  );
};

// Add this Leaf component for inline formatting
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  return <span {...attributes}>{children}</span>;
};

export default BlogEditor;
