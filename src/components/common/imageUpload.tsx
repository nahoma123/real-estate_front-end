import React, { useEffect, useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
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
    console.log("initialImageLinks",initialImageLinks);
  }, []);
  return (
    <DropzoneArea
      filesLimit={filesLimit}
      onChange={onImageUpload}
      acceptedFiles={["image/*"]}
      initialFiles={initialImageLinks}
    />
  );
};

export default ImageUpload;
