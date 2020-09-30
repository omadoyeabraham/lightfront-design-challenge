import React, { useState } from "react";

interface I_TagInputProps {
  tags: Array<string>;
  setTags: Function;
}

/**
 * Form input used to input a list of tags
 */
const TagInput = (props: I_TagInputProps) => {
  const { tags, setTags } = props;
  const [tag, setTag] = useState("");

  // Handle what happens when the enter key is pressed after add a new tag in the input box
  const handleTagEnter = (event: any) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setTags([...tags, event.target.value]);
      setTag("");
      event.preventDefault();
    }
  };

  // Handle the updating of the tag value as it's typed in the input form
  const handleChange = (event: any) => {
    event.preventDefault();
    setTag(event.target.value);
  };

  // Handle deleting a tag
  const handleDeleteTag = (tagIndex: number) => {
    const filteredTags = tags.filter((tag, index) => index !== tagIndex);
    setTags([...filteredTags]);
  };

  return (
    <div className="flex border rounded-sm">
      {tags.length > 0 &&
        tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-500 text-white text-sm px-2 py-1 mx-1 my-2 rounded-md flex"
          >
            {tag}
            <span
              onClick={() => handleDeleteTag(index)}
              className="ml-2 cursor-pointer"
            >
              x
            </span>
          </span>
        ))}

      <input
        type="text"
        className="ml-2 flex-1 focus:outline-none h-10"
        placeholder="Enter a keyword"
        value={tag}
        onChange={handleChange}
        onKeyPress={handleTagEnter}
      />
    </div>
  );
};

export default TagInput;
