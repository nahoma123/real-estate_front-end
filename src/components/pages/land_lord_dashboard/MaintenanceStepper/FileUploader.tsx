import React, { useState, useRef } from 'react';
import { Card, CardContent, IconButton, LinearProgress, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface FileUploaderProps {
  onFileUpload: (files: FileList | null) => void;
}

const DashedBorderCard = styled(Card)({
  border: '2px dashed #aaa',
  padding: '16px',
  textAlign: 'center',
  cursor: 'pointer',
});

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [progress, setProgress] = useState<number>(0);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      // Limit the number of files to 10
      const selectedFilesList: File[] = files.length <= 10 ? Array.from(files) : Array.from(files).slice(0, 10);
      const selectedFilesObject = new DataTransfer();

      selectedFilesList.forEach(file => {
        selectedFilesObject.items.add(file);
      });

      const selectedFilesFileList = selectedFilesObject.files;

      setSelectedFiles(selectedFilesFileList);
      onFileUpload(selectedFilesFileList);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <DashedBorderCard onClick={handleClick}>
      <CardContent>
        <input
          type="file"
          accept="image/*, video/*, audio/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="file-input"
          multiple
          ref={fileInputRef}
        />
        <label htmlFor="file-input">
          <IconButton component="span" color="primary" style={{fontSize:40}}>
            <CloudUploadIcon />
          </IconButton>
        </label>
        {selectedFiles && (
          <div>
            <p>{`${selectedFiles.length} files selected`}</p>
          </div>
        )}
        {progress > 0 && <LinearProgress variant="determinate" value={progress} />}
      </CardContent>
    </DashedBorderCard>
  );
};

export default FileUploader;
