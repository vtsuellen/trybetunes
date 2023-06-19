import { SongType } from '../../types';

function MusicCard(props: SongType) {
  const { previewUrl, trackName } = props;

  return (
    <div>
      <h3>{ trackName }</h3>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>
          Audio
        </code>
      </audio>
    </div>
  );
}

export default MusicCard;
