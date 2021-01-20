import { Button, Divider, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import { instruments } from '../../data/playing.json';
import { introduction } from '../../data/compositions.json';

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Musician = () => {
  return <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
    <Head>
      <title>Henry Bersey | Music</title>
    </Head>


    <motion.div initial={'hidden'} animate={'visible'} variants={variants}>
      <Typography variant={'h3'}>Music</Typography>
    </motion.div>

    <motion.div initial={'hidden'} animate={'visible'} variants={variants} transition={{ delay: 0.5 }}>
      <Typography variant={'body1'}>Instruments:</Typography>
    </motion.div>

    <motion.ul style={{ marginTop: 0 }} variants={variants} initial={'hidden'} animate={'visible'}
               transition={{ delay: 0.55, delayChildren: 0.55, staggerChildren: 0.05 }}>
      {instruments.map((instrument, i) => <motion.li key={i} variants={variants}>{instrument}</motion.li>)}
    </motion.ul>

    <Link href={'/music/playing'}>
      <motion.div variants={variants} initial={'hidden'} animate={'visible'}
                  transition={{ delay: 0.85 + 0.05 * instruments.length }}>
        <Button variant={'outlined'}>My Playing</Button>
      </motion.div>
    </Link>

    <motion.div variants={variants} initial={'hidden'} animate={'visible'}
                transition={{ delay: 1.15 + 0.05 * instruments.length }}>
      <Divider style={{ marginTop: 10, marginBottom: 5 }} />
      <Typography variant={'h4'}>Composition and Arranging</Typography>
    </motion.div>

    <motion.div variants={variants} initial={'hidden'} animate={'visible'}
                transition={{ delay: 1.45 + 0.05 * instruments.length }} style={{marginBottom: 5}}>
      <Typography variant={'body1'} dangerouslySetInnerHTML={{ __html: introduction }} />
    </motion.div>

    <motion.div variants={variants} initial={'hidden'} animate={'visible'}
                transition={{ delay: 1.75 + 0.05 * instruments.length }}>
      <Link href={'/music/composition'}>
        <Button variant={'outlined'}>Compositional Portfolio</Button>
      </Link>
    </motion.div>


  </motion.div>;
};


export default Musician;