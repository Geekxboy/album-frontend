import { Link } from "react-router-dom";

export default function AlbumList({albums}) {

  // Create album components with links to album urls
  const albumsList = albums.map((album, index) => (
      <Link to={'/album/' + album.id} className="album" key={index}>
        <p>{album.title}</p>
      </Link>
  ));

  return (
    <>
      <header className="page-title">
          Photo Albums
      </header>

      <div className="album-list">
        {albumsList}
      </div>
    </>
  );
}