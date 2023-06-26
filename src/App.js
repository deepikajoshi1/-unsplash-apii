import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, deletePhoto, deleteAllPhotos } from './photoSlice';

const App = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);


  const handleAddImage = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/random?count=1&query=',
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const newPhotos = data.map((photo) => photo.urls.regular);
        dispatch(fetchPhotos([...photos, ...newPhotos]));
      } else {
        // Handle non-successful response
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleDeleteImage = () => {
    if (photos.length === 0) {
      alert('Nothing to delete!');
      return;
    }

    dispatch(deletePhoto());
  };

  const handleDeleteAll = () => {
    if (photos.length === 0) {
      alert('Nothing to delete!');
      return;
    }

    dispatch(deleteAllPhotos());
  };

  return (
    <div>
      <button onClick={handleAddImage}>Add Image</button>
      <button onClick={handleDeleteImage}>Delete Image</button>
      <button onClick={handleDeleteAll}>Delete All</button>

      <div>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={` ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
