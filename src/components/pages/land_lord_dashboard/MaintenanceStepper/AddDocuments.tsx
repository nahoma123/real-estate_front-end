import React from 'react';
import FileUploader from './FileUploader';
import { Typography, Divider } from '@material-ui/core';

const AddDocuments: React.FC = () => {
  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      // Perform file upload logic here
      console.log('Uploaded files:', files);
    }
  };

  return (
    <div>
      <Typography component="div" style={{ fontSize: '1rem' }}>
        Attach files
      </Typography>
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  );
};

export default AddDocuments;