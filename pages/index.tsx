import { Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
    const theme = useTheme();

    return <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
        textAlign: 'center'
      }}

      initial={'initial'}
      animate={'animate'}
      exit={{ opacity: 0 }}
    >

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 style={theme.typography[useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h2']} layoutId={'title'}>
        Henry Bersey
      </motion.h1>

      <br />
      <Grid container>
        <Grid item md={4} />
        <Grid item md={2} xs={6}>
          <Link href={'/dev'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .5 } }}
                        whileHover={{ scale: 1.2, transition: { delay: 0 } }}>
              < Button variant={'outlined'} aria-label={'Programmer'}>Programmer
              </Button>
            </motion.div>
          </ Link>
        </Grid>
        <Grid item md={2} xs={6}>
          <Link href={'/music'}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .8 } }}
                        whileHover={{ scale: 1.2 }}>
              <Button variant={'outlined'} aria-label={'Musician'}>Musician</Button>
            </motion.div>
          </ Link>
        </Grid>
      </Grid>
    </motion.div>;
  }
;


export default Home;
