import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImages } from "../../services/apiService";
export const handleImageUpload = async (files) => {
    const imageLocations = [];
    console.log("uploading");
    try {
        for (const file of files) {
            // Perform the image upload API call for each file
            const response = await uploadImages(file);
            // Assuming the API response contains the location of the uploaded image
            const imageLocation = response?.data;
            // Add the image location to the array
            imageLocations.push(imageLocation);
        }
        // Call the parent component's onImageUpload function with the array of image locations
    }
    catch (error) {
        // Handle any errors that occur during the image upload
        console.error("Image upload failed:", error);
    }
    return imageLocations;
};
const ImageUpload = ({ initialImageLinks, onImageUpload, filesLimit, }) => {
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
    return (_jsxs("div", { ...getRootProps(), children: [_jsx("input", { ...getInputProps() }), _jsx("p", { children: "Drag 'n' drop some files here, or click to select files" })] }));
};
export default ImageUpload;
