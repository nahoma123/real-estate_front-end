// AddDocuments.js
import React, { useState } from 'react';
import FileUploader from './FileUploader';
import { Typography, Divider, Button } from '@mui/material';

interface AddDocumentsProps {
  onDocumentsUpload: (files: FileList | null) => void;
  onFinish: (files: FileList | null) => void;
}

const AddDocuments: React.FC<AddDocumentsProps> = ({ onDocumentsUpload, onFinish }) => {
  const [documentsUploaded, setDocumentsUploaded] = useState<boolean>(false);

  const handleFileUpload = (files: FileList | null) => {
    onDocumentsUpload(files);
    setDocumentsUploaded(true);
  };

  const handleFinish = (files: FileList | null) => {
    onFinish(files);
    // Optionally, reset state or perform cleanup here
    setDocumentsUploaded(false);
  };

  return (
    <div>
      <Typography component="div" style={{ fontSize: '1rem' }}>
        Attach files
      </Typography>
      <FileUploader onFileUpload={handleFileUpload} />
      {documentsUploaded && (
        <div>
          <Divider />
        </div>
      )}
    </div>
  );
};

export default AddDocuments;
