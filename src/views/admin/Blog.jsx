// Blog.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('image', image);  // Append the image file

    try {
      const response = await axios.post('http://localhost:3001/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Blog post created successfully!');
      setTitle('');
      setContent('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error('Error creating blog post', error);
      alert('Failed to create blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 mx-auto  p-10  bg-[#283046] t shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className='text-[#fff'>
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-medium mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3  bg-[#192231] text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content Textarea */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-white font-medium mb-2">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 bg-[#192231] text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
          />
        </div>

        {/* Category Input */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-white font-medium mb-2">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-3 bg-[#192231] text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-white font-medium mb-2">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full text-white p-3 bg-[#192231] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md focus:outline-none hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Blog Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;
