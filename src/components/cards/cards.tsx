/* eslint-disable react/void-dom-elements-no-children */
import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

function Card(props: AlbumType) {
  const { collectionId, artistName, artworkUrl100, collectionName } = props;

  return (
    <div className="cards">
      <ul className="ul">
        <li className="li">
          <img src={ artworkUrl100 } alt="Imagem da Musica" className="img" />
          <Link
            data-testid={ `link-to-album-${collectionId}` }
            to={ `/album/${collectionId}` }
          >
            <p>{ artistName }</p>
            <p>{ collectionName }</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Card;
