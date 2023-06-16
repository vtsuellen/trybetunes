/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { Loading } from '../loading/loading';
import { AlbumType } from '../../types';
import Card from '../../components/cards/cards';

function Search() {
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [album, setAlbum] = useState<AlbumType[]>([]);

  const validInput = input.length < 2;

  const handleSearch = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const searchData = await searchAlbumsAPI(input);
    setLoading(false);
    setSearch(input);
    setAlbum(searchData);

    navigate('/search');
  };

  return (
    <>
      {' '}
      {loading === false && (
        <form onSubmit={ handleSearch }>
          <input
            type="text"
            data-testid="search-artist-input"
            placeholder="O que você quer ouvir?"
            onChange={ (event) => {
              setInput(event.target.value);
            } }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ validInput }
          >
            Procurar
          </button>
        </form>
      )}
      {loading === true && <Loading />}
      {search && <p>{`Resultado de álbuns de: ${search}`}</p>}
      {album.length > 0
        ? album
          .map((album) => <Card key={ album.collectionId } { ...album } />)
        : 'Nenhum álbum foi encontrado'}
    </>
  );
}

export default Search;
