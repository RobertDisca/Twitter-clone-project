import React, { useState } from 'react';
const ImageUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(selectedFile.name);

            fileRef.put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setImageUrl(downloadURL); // Setează URL-ul imaginii în starea
                });
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Încarcă imaginea</button>
            {imageUrl && <img src={imageUrl} alt="Imagine încărcată" />}
        </div>
    );
};

export default ImageUploader;
