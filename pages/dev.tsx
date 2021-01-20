import { Button, Divider, Icon, Typography } from '@material-ui/core';
import Head from 'next/head';
import { motion, Variants } from 'framer-motion';

import { languages, libraries, projects } from '../data/programming.json';
import Link from 'next/link';
import useDarkMode from '../hooks/useDarkMode';

type Project = { title: string, body: string, links: any[] };

let _delay = 0;
const delay = (amount = 0.2) => {
  _delay += amount;
  return _delay;
};

const variants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};


const Programmer = () => {
  const [darkMode] = useDarkMode();

  return <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
    <Head>
      <title>Henry Bersey | Programming</title>
    </Head>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant={'h3'}>Programming</Typography>
    </motion.div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay() }}>
      <Typography variant={'body1'}>Programming Languages:</Typography>
    </motion.div>

    <motion.ul style={{ marginTop: 0 }} initial={'hidden'} animate={'visible'} variants={variants}
               transition={{ delay: delay(0.05), delayChildren: delay(0), staggerChildren: 0.05 }}>
      {
        languages.map((language, i) =>
          <motion.li key={i} variants={variants}>
            {language}
          </motion.li>
        )
      }
    </motion.ul>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: delay(0.05 * languages.length) }}>
      <Typography variant={'body1'}>Libraries / Frameworks etc:</Typography>
    </motion.div>

    <motion.ul style={{ marginTop: 0 }} initial={'hidden'} animate={'visible'} variants={variants}
               transition={{ delay: delay(0.05), delayChildren: delay(0), staggerChildren: 0.05 }}>
      {
        libraries.map((library, i) =>
          <motion.li key={i} variants={variants}>
            {library}
          </motion.li>
        )
      }
    </motion.ul>


    <motion.div initial={'hidden'} animate={'visible'} variants={variants}
                transition={{ delayChildren: delay(), staggerChildren: .6 }}>
      {projects.map(({ title, body, links }: Project, i) =>
        <motion.div key={i} variants={variants}>
          {i != 0 && <Divider style={{ marginTop: 10, marginBottom: 5 }} />}
          <Typography variant={'h4'}>{title}</Typography>
          <Typography variant={'body1'} dangerouslySetInnerHTML={{ __html: body }} />
          <motion.div initial={'hidden'} animate={'visible'} variants={variants}
                      transition={{ delay: delay(0), delayChildren: delay(0), staggerChildren: 0.05 }}>
            {links.map(({ text, iconClass, href }, i) =>
              <motion.div key={i} variants={variants} style={{ display: 'inline', marginRight: 10 }}>
                <Button style={{ marginTop: 10 }} variant={'outlined'} href={href}
                        target='_blank' rel='noopener' startIcon={<Icon className={iconClass} />}>
                  {text}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}

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

    </motion.div>


  </motion.div>;
};

export default Programmer;
