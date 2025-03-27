import React, { useContext, useEffect, useState } from 'react';
import './ProfileUpdate.css';
import assets from '../../assets/assets';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';

const ProfileUpdate = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [uid, setUid] = useState('');
  const navigate = useNavigate();
  const [prevImage, setPrevImage] = useState('');
  const { setUserData } = useContext(AppContext);

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'First_Time'); // Your Cloudinary preset
    data.append('cloud_name', 'dlcci7kof'); // Your Cloudinary cloud name

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dlcci7kof/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );

      const uploadedImageData = await res.json();
      return uploadedImageData.url; // Return the Cloudinary image URL
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
      return null;
    }
  };

  const profileUpdate = async (event) => {
    event.preventDefault();

    try {
      if (!prevImage && !image) {
        toast.error('Upload profile picture');
        return;
      }

      const docRef = doc(db, 'users', uid);
      let imageURL = prevImage;

      if (image) {
        imageURL = await uploadToCloudinary(image);
        if (!imageURL) return; // Stop execution if upload fails
        setPrevImage(imageURL);
      }

      await updateDoc(docRef, {
        avatar: imageURL,
        bio: bio,
        name: name,
      });

      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate('/chat');
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setName(docSnap.data().name || '');
          setBio(docSnap.data().bio || '');
          setPrevImage(docSnap.data().avatar || '');
        }
      } else {
        navigate('/');
      }
    });
  }, []);

  return (
    <div className='profile'>
      <div className='profile-container'>
        <form onSubmit={profileUpdate}>
          <h3>Profile details</h3>
          <label htmlFor='avatar'>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              id='avatar'
              type='file'
              accept='.png, .jpg, .jpeg'
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : prevImage || assets.avatar_icon}
              alt='Profile'
            />
            Upload profile image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Your name'
            type='text'
            required
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder='Write profile bio'
            required
          />
          <button type='submit'>Save</button>
        </form>
        <img
          className='profile-pic'
          src={image ? URL.createObjectURL(image) : prevImage || assets.logo_icon}
          alt=''
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
