import React, { useState } from 'react';
import deb from 'debug';

const debug = deb('app:NewBlog');

const NewBlog = () => {
  const [formEntries, setFormEntries] = useState({
    title: '',
    authourId: '',
    imgUrl: '',
    blogPost: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevEntries) => {
      return {
        ...prevEntries,
        [name]: value,
      };
    });
  };
  debug(formEntries);
  console.log(formEntries);
  return (
    <form>
      <h2>Add A New Blog Post</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Enter Blog Title"
          value={formEntries.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="img_url">Optional Blog Image</label>
        <input
          name="imgUrl"
          id="img_url"
          type="text"
          placeholder="Enter Image Url"
          value={formEntries.imgUrl}
          onChange={handleChange}
        />
      </div>

      <div>
        <label></label>
        <input
          type="hidden"
          placeholder=""
          name="authorId"
          value={formEntries.authourId || '0123456789'}
        />
      </div>

      <div>
        <label htmlFor="blogPost">Write Your Blog Post Here:</label>
        <textarea
          id="blogPost"
          name="blogPost"
          value={formEntries.blogPost}
          onChange={handleChange}
          rows="8"
          cols="33"
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewBlog;
