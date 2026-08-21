const getImageUrl = (imagePath) => {
    if (!imagePath || !imagePath.startsWith("/")) {
        return imagePath;
    }

    return `${process.env.PUBLIC_URL}${imagePath}`;
};

export default getImageUrl;
