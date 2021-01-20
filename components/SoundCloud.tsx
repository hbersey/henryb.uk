import { CSSProperties } from 'react';

type RequiredProps = {
  url: string
}

type OptionalProps = {
  title?: string,
  style?: CSSProperties
}

const defaultProps = {
  autoPlay: false,
  color: '#cc4400',
  buying: false,
  showShare: true,
  download: false,
  showArtwork: true,
  showPlayCount: true,
  showUser: true,
  startTrack: 0,
  singleActive: true
};

type Props = RequiredProps & OptionalProps & Partial<Readonly<typeof defaultProps>>;

const SoundCloud = (props: Props) => {

  let url = `https://w.soundcloud.com/player/?url=${props.url}`;

  const formattedProps = Object.assign({}, props, { url: undefined, color: props.color.replace('#', '') });

  ['auto_play', 'color', 'buying', 'sharing', 'download', 'show_artwork', 'show_playcount', 'show_user', 'start_track', 'single_active']
    .forEach((parameter, i) => url = `${url}&${parameter}=${formattedProps[Object.keys(defaultProps)[i]]}`);

  return <iframe width='100%' height='166' scrolling='no' frameBorder='no' allow='autoplay' src={url} loading={'lazy'}
                 title={props.title} style={props.style}>
  </iframe>;
};

SoundCloud.defaultProps = defaultProps;

export default SoundCloud;