import React from 'react';

function AddNewBlogPage() {
  return (
    <form className="write">
      <h2>Add New Blog Post</h2>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Enter Blog Title" />
      </div>
      <div>
        <label>Author ID</label>
        <input type="text" placeholder="Author ID" />
      </div>
      <div>
        <label>Content</label>
        <textarea
          placeholder="Enter Blog Content"
          rows={10}
          cols={15}
        ></textarea>
      </div>
      <button>Add</button>
    </form>
  );
}

export default {
  component: AddNewBlogPage,
};
