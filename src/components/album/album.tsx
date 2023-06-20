/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../pages/loading/loading';
import { AlbumType, SongType } from '../../types';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../musicCard/musicCard';

function Album() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Musics, setMusics] = useState<SongType[]>([]);
  const [artist, setArtist] = useState<AlbumType>();

  const rendering = async () => {
    if (id) {
      setIsLoading(true);
      const Music = await getMusics(id);
      setArtist(Music[0]);

      // slice() permite “fatiar” uma string ou array e recuperar parte dos seus elementos.
      setMusics(Music.slice(1) as SongType[]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    rendering();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div>
        <img src={ artist?.artworkUrl100 } alt="foto do álbum" />
        <h3 data-testid="album-name">{ artist?.collectionName }</h3>
        <p data-testid="artist-name">{ artist?.artistName }</p>
      </div>
      <div>
        <ul>
          {Musics.map((music) => (
            <li key={ music.trackId }>
              <MusicCard
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Album;
