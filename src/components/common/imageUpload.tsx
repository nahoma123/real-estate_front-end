import React, { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImages } from "services/apiService";

interface ImageUploadProps {
  initialImageLinks?: string[];
  onImageUpload: (imageLocations: File[]) => void;
  filesLimit: number;
}

export const handleImageUpload = async (files: File[]) => {
  const imageLocations: string[] = [];
  console.log("uploading");
  try {
    for (const file of files) {
      // Perform the image upload API call for each file
      const response: any = await uploadImages(file);
      // Assuming the API response contains the location of the uploaded image
      const imageLocation = response?.data;

      // Add the image location to the array
      imageLocations.push(imageLocation);
    }

    // Call the parent component's onImageUpload function with the array of image locations
  } catch (error) {
    // Handle any errors that occur during the image upload
    console.error("Image upload failed:", error);
  }
  return imageLocations;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImageLinks,
  onImageUpload,
  filesLimit,
}) => {
  useEffect(() => {
    console.log("initialImageLinks", initialImageLinks);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    onImageUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: filesLimit,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default ImageUpload;
