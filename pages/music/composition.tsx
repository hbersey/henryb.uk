import { Divider, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { compositions, arrangements } from '../../data/compositions.json';
import SoundCloud from '../../components/SoundCloud';
import useDarkMode from '../../hooks/useDarkMode';

const variants = (i: number) => ({
  visible: {
    opacity: 1,
    transition: { delay: (i + 1) * 0.3 }
  },
  hidden: {
    opacity: 0
  }
});

const Composition = () => {

  const theme = useTheme();
  const [darkMode] = useDarkMode();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
    <Head>
      <title>Henry Bersey | Composition</title>
    </Head>

    <motion.div variants={variants(-1)} initial={'hidden'} animate={'visible'}>
      <Typography variant={'h3'}>Compositions</Typography>
    </motion.div>

    <Grid container style={{ marginTop: 15, marginBottom: 15 }} spacing={2}>
      {compositions.map(({ name, description, player, instrumentation }, i) =>
        <Grid md={6} key={i} item>
          <motion.div variants={variants(i)} initial={'hidden'} animate={'visible'}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexGrow: 1,
                        flexDirection: 'column',
                        height: '100%',
                        width: 'auto'
                      }}>
            <Typography variant={'h5'} component={'h4'}>{name}</Typography>
            <Typography variant={'body1'}>{description}</Typography>
            {instrumentation && [
              <Typography variant={'body1'} key={'instrumentationTitle'}>Instrumentation:</Typography>,
              <ul key={'instrumentationList'} style={{ marginTop: 0 }}>
                {instrumentation.map((el, i) => <li key={i}>{el}</li>)}
              </ul>
            ]}
            <div style={{ flex: 1 }} />
            {player &&
            <SoundCloud url={player.url} color={theme.palette.primary.main} showArtwork={smUp} title={name}
                        style={{}} />}
          </motion.div>
        </Grid>
      )}
    </Grid>

    <motion.div initial={'hidden'} animate={'visible'} variants={variants(compositions.length)}>
      <Divider style={{ marginTop: 10, marginBottom: 5 }} />
      <Typography variant={'h3'}>Arrangements</Typography>
    </motion.div>


    <Grid container style={{ marginTop: 15, marginBottom: 15 }}>
      {arrangements.map(({ name, original, description, instrumentation }, i) =>
        <Grid md={6} key={i} item>
          <motion.div variants={variants(compositions.length + i + 1)} initial={'hidden'} animate={'visible'}>
            <Typography variant={'h5'} component={'h4'}>{name}</Typography>
            <Typography variant={'h6'} component={'h5'}><em>{original}</em></Typography>
            <Typography variant={'body1'}>{description}</Typography>
            {instrumentation && [
              <Typography variant={'body1'} key={'instrumentationTitle'}>Instrumentation:</Typography>,
              <ul key={'instrumentationList'} style={{ marginTop: 0 }}>
                {instrumentation.map((el, i) => <li key={i}>{el}</li>)}
              </ul>
            ]}
          </motion.div>
        </Grid>
      )}
    </Grid>

    <div>
      <Typography variant={'body2'} style={{ display: 'inline' }}>
        To request a score, performance/usage rights, to commission a composition/arrangement or any other enquiries
        contact me&nbsp;
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


export default Composition;