const upload = async (file) => {
    try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "First_Time"); // Cloudinary Upload Preset
        data.append("cloud_name", "dlcci7kof"); // Replace with your Cloudinary Cloud Name

        const res = await fetch("https://api.cloudinary.com/v1_1/dlcci7kof/image/upload", {
            method: "POST",
            body: data,
        });

        const uploadedImageData = await res.json();
        return uploadedImageData.secure_url; // Ensure you're using secure URL
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Image upload failed");
    }
};

export default upload;
