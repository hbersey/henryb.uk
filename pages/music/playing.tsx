import { Divider, Grid, Typography } from '@material-ui/core';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Youtube from '../../components/Youtube';
import Spotify from '../../components/Spotify';
import { playing } from '../../data/playing.json';
import Link from 'next/link';
import useDarkMode from '../../hooks/useDarkMode';

const renderItem = (item, i, depth = 0) =>
  item.type == 'parent'
    ? [
      <Divider style={i == 0 ? { height: 0 } : { marginTop: 15, marginBottom: 5 }} key={'divider'} />,
      <Typography variant={'h4'} key={'title'} component={'h3'}>{item.title}</Typography>,
      <Typography variant={'body1'} style={{ height: item.subtitle ? undefined : 0 }} key={'subtitle'}>
        {item.subtitle || ''}
      </Typography>,
      <Grid container key={'grid'} spacing={2}>
        {item.children.map((item, i) => renderItem(item, i, depth + 1))}
      </Grid>
    ].flat()
    : <Grid item xs={12} md={6} lg={4} key={i}>
      <Typography variant={depth == 0 ? 'h4' : 'h6'} key={'title'} component={depth == 0 ? 'h3' : 'h4'}
                  style={{ flex: 1 }}>{item.title}</Typography>
      {item.type == 'youtube' && (item.videoId
          ? <Youtube videoId={item.videoId} title={item.title} />
          : <Youtube playlist={true} playlistId={item.playlistId} title={item.title} />
      )}
      {item.type == 'spotify' && <Spotify spotifyUri={item.spotifyUri} title={item.title} />}
    </Grid>;

const Playing = () => {
  const [darkMode] = useDarkMode();

  return <motion.div style={{ width: 'inherit' }} initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
    <Head>
      <title>Henry Bersey | Playing</title>
    </Head>

    {playing.map((item, i) => renderItem(item, i))}

    <div style={{ marginTop: 10 }}>
      <Typography variant={'body2'} style={{ display: 'inline' }}>
        For any enquires contact me&nbsp;
      </Typography>
      <Link href={'/contact'}>
        <Typography variant={'body2'} color={darkMode ? 'secondary' : 'primary'} style={{ display: 'inline' }}>
          here
        </Typography>
      </Link>
      <Typography variant={'body2'} style={{ display: 'inline' }}>
        &nbsp;or at <em>henry@bersey.com</em>
      </Typography>
    </div>


  </motion.div>;
};


export default Playing;