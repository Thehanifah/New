// src/components/MarkdownPage.jsx
import React from 'react';
import markdown from '../pages/my-markdown-page.md';

const MarkdownPage = () => {
  return (
    <div>
      {markdown}
    </div>
  );
};

export default MarkdownPage;
