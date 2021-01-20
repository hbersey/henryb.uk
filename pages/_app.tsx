import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  AppBar,
  Button,
  Container,
  createStyles,
  CssBaseline,
  Drawer, FormControlLabel,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MuiThemeProvider, Switch,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  WithStyles,
  withStyles
} from '@material-ui/core';

import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../styles/theme';
import useDarkMode from '../hooks/useDarkMode';
import { links } from '../data/links.json';

const desktopLinks = links.filter(link => link.only != 'mobile');

const styles = (theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar
});

type Props = { Component: any, pageProps: any } & WithStyles<typeof styles>;

const MyApp = ({ Component, pageProps, classes }: Props) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [showDrawer, setDrawerVisibility] = useState(false);

  const router = useRouter();
  const theme = useTheme(darkMode);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (window.location.hostname != 'henryb.uk')
      return;

    const httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens)
      window.location.replace(`https://${httpTokens[1]}`);
  }, []);

  return <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Head>
      <title>Henry Bersey</title>
      <meta name='viewport'
            content='minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
    </Head>

    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position={'fixed'}>
        {useMediaQuery(theme.breakpoints.up('sm'))
          ? <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link href='/'>
                < Typography variant={'h4'} style={{ color: 'inherit' }} component={'h1'}>Henry Bersey</Typography>
              </Link>

              <div>
                {Array.from({ length: desktopLinks.length * 2 - 1 }, (x, i) => i % 2 == 0
                  ? <motion.div whileHover={{ color: theme.palette.secondary.main }} transition={{ duration: 0 }}
                                style={{ display: 'inline' }} key={i}>
                    <Link href={desktopLinks[i / 2].href}>
                      <Typography variant={'subtitle1'} component={'h2'}
                                  style={{ display: 'inline' }}>{desktopLinks[i / 2].name}</Typography>
                    </Link>
                  </motion.div>
                  : <Typography variant={'subtitle1'} style={{ display: 'inline' }} key={i}
                                component={'h2'}>&nbsp;|&nbsp;</Typography>
                )}
              </div>

            </div>
            <div>
              <IconButton onClick={() => setDarkMode(!darkMode)} aria-label={'Toggle Dark Mode'}>
                {darkMode ? <Icon className={'fas fa-moon'} />
                  : <Icon className={'fas fa-sun'} />}
              </IconButton>

              <Link href={'/contact'}>
                <Button variant={'text'} color={'inherit'} aria-label={'Contact'}>Get In Touch</Button>
              </Link>
            </div>
          </Toolbar>
          : <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link href='/'>
                < Typography variant={'h4'} style={{ color: 'inherit' }}>Henry Bersey</Typography>
              </Link>
            </div>
            <IconButton color={'inherit'} onClick={() => setDrawerVisibility(!showDrawer)} aria-label={'Show Drawer'}>
              <Icon className={'fas fa-bars'} />
            </IconButton>
          </Toolbar>
        }
      </AppBar>

      <Drawer anchor={'right'} open={showDrawer} onClose={() => setDrawerVisibility(false)}>
        <List component={'nav'}>
          {
            links.filter(link => link.only != 'desktop').map(({ href, name, drawerName }) =>
              <Link href={href} key={href}>
                <ListItem button onClick={() => setDrawerVisibility(false)} aria-label={drawerName ?? name}>
                  <ListItemText primary={drawerName ?? name} />
                </ListItem>
              </Link>
            )
          }
          <ListItem style={{ position: 'fixed', bottom: 0, width: 'auto' }}>
            <FormControlLabel control={<Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />}
                              label={'Dark Mode'} />
          </ListItem>
        </List>
      </Drawer>

      <div className={classes.toolbar} />

      <Container style={{ flex: 1, display: 'flex', marginTop: 5 }}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Container>

      <motion.div style={{ marginTop: 10, marginBottom: 10 }} initial={{ y: 100, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant={'body1'} align={'center'}>© Henry Bersey 2021</Typography>
      </motion.div>

    </MuiThemeProvider>
  </div>;
};


export default withStyles(styles)(MyApp);



