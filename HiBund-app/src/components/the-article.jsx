// src/Article.js

import React from 'react';

const TheArticle = ({ title, author, date, content, image }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-5">{title}</h1>
        <div className="mt-2 flex items-center">
          <div className="mr-2">
            <img className="h-10 w-10 rounded-full" src="" alt={author} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
      {image && (
        <div className="mb-8">
          <img className="w-full rounded-lg" src={image} alt={title} />
        </div>
      )}
      <div className="prose prose-lg max-w-none">
          <p>{content}</p>
      </div>
    </div>
  );
};

export default TheArticle;
