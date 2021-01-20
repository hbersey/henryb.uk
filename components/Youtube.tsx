import IFrameWrapper, { IFrameProps } from './IFrameWrapper';

type RequiredProps = { videoId: string, playlist?: false } | { playlist: true, playlistId: string }

const defaultProps = {
  allowFullScreen: true,
  loading: 'lazy'
};

type Props = IFrameProps & RequiredProps & Partial<Readonly<typeof defaultProps>>;

const Youtube = (props: Props) => {
  const params = { fs: props.allowFullScreen == true ? 1 : 0 };

  const paramsStr = Object.keys(params).map(param => `${param}=${params[param]}`).join('&');

  return <IFrameWrapper
    title={props.title} loading={props.loading}
    src={props.playlist == true ? `https://www.youtube.com/embed?listType=playlist&list=${props.playlistId}&${paramsStr}` : `https://www.youtube.com/embed/${props.videoId}?${paramsStr}`}
    props={{ allowFullScreen: props.allowFullScreen ? 'allowfullscreen' : undefined, frameBorder: 0 }}
  />;
};

Youtube.defaultProps = defaultProps;

export default Youtube;