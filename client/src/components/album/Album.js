import { Link } from 'react-router-dom';

const Album = ({ album }) => {
  return (
    <div className="album">
      <h2>{album.name}</h2>
      <Link to={`/album/${album.id}`}>
        <img src={`/api/albums/${album.id}/thumbnail`} alt={album.name} />
      </Link>
    </div>
  );
};

export default Album;
