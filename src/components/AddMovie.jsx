import React, { useState, useRef } from "react";

import { Button } from "react-bootstrap";

const AddMovie = (addNew) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
  });
  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();

  const handleChange = () => {
    setFormData({
      title: titleRef.current.value,
      description: descRef.current.value,
      rating: ratingRef.current.value,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        fontSize: "medium",
      }}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" ref={titleRef} type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          ref={descRef}
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Rating</label>
        <input
          id="rating"
          ref={ratingRef}
          type="text"
          onChange={handleChange}
        />
      </div>

      <Button onSubmit={submitHandler}>Add Movie</Button>
    </form>
  );
};

export default AddMovie;
