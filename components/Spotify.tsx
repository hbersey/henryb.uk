import IFrameWrapper, { IFrameProps } from './IFrameWrapper';

type RequiredProps = { spotifyUri: string }

const defaultProps = {
  loading: 'lazy'
};

type Props = IFrameProps & RequiredProps & Partial<Readonly<typeof defaultProps>>;

const Spotify = ({ spotifyUri, title, loading }: Props) => {

  const [, type, id] = spotifyUri.split(':');

  return <IFrameWrapper src={`https://open.spotify.com/embed/${type}/${id}`} title={title} loading={loading}
                        props={{ allowtransparency: 'true', allow: 'encrypted-media', frameBorder: 0 }} />;
};

Spotify.defaultProps = defaultProps;

export default Spotify;