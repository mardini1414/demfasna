import React from 'react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from '@inertiajs/inertia-react';

const formNews = () => {
  const { data, setData, post, errors } = useForm({ title: '', body: '', image: null });

  const submit = e => {
    e.preventDefault();
    post('/dashboard/news');
  };

  return (
    <DashboardLayout>
      <form className="container p-4" onSubmit={submit}>
        <label htmlFor="title" className="text-primary">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 mb-4 border border-gray-300 focus:outline-none"
          onChange={e => setData('title', e.target.value)}
        />
        {errors.title && <small className="block mb-4 text-red-500">{errors.title}</small>}
        <label htmlFor="body" className="text-primary">
          Body:
        </label>
        <ReactQuill theme="snow" id="body" className="mb-4" onChange={e => setData('body', e)} />
        {errors.body && <small className="block mb-4 text-red-500">{errors.body}</small>}
        <label htmlFor="image" className="text-primary">
          Image:
        </label>
        <input
          type="file"
          accept="image/webp"
          id="image"
          className="block mb-4"
          onChange={e => setData('image', e.target.files[0])}
        />
        {errors.image && <small className="block mb-4 text-red-500">{errors.image}</small>}
        <button type="submit" className="px-8 py-2 mt-4 text-white bg-blue-600 rounded-sm">
          Add news
        </button>
      </form>
    </DashboardLayout>
  );
};

export default formNews;
