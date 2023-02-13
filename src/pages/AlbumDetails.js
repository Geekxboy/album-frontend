import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoModal from "../components/PhotoModal";

export default function AlbumDetails({albums}) {
  // Load URL parameters
  const { id } = useParams();

  // Initialize photo modal
  const [showModal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState([]);

  let modalClose = () => setModal(false);
  let triggerModal = (photo) => {
    setModalPhoto(photo);
    setModal(true);
  }

  // Load album photos
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/" + id + "/photos")
      .then((response) => response.json())
      .then(setPhotos)
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Create photo components
  const photoList = photos.map((photo, index) => (
    <div className="image-container" key={index} onClick={() => triggerModal(photo)}>
      <img src={photo.thumbnailUrl} className="image" alt="album-images" />
      <p>{photo.title}</p>
    </div>
  ));

  // Find album title from URL parameters 
  const albumTitle = albums.find((album) => `${album.id}` === `${id}`) || {};

  return (
    <>
      <header className="page-title">
        {albumTitle.title}
      </header>

      <div className="photo-list">
        {showModal ? (
          <PhotoModal
              photo={modalPhoto}
              show={showModal}
              onHide={modalClose}
          />
        ) : null}
        {photoList}
      </div>
    </>
  );
}