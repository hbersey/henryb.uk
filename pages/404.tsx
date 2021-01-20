import { Button, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  const [countdown, setCountdown] = useState(10);
  const [redirectFailed, setRedirectFailed] = useState(false);
  const router = useRouter();

  if (!redirectFailed)
    useEffect(() => {
      setTimeout(() => {
        if (countdown > 1)
          setCountdown(countdown - 1);
        else
          setRedirectFailed(!router.push('/'));
      }, 1000);
    });

  return <motion.div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      flexDirection: 'column',
      textAlign: 'center'
    }} initial={'initial'} animate={'animate'} exit={{ opacity: 0 }} layoutId={"title"}>
    <Typography variant={'h1'}>404</Typography>
    <br />
    {redirectFailed
      ? <Link href={'/'}>
        <Button variant={'outlined'}>Go Home</Button>
      </Link>
      : <div>
        <Typography variant={'h3'}>Page Not Found</Typography>
        <Typography variant={'body1'}>Redirecting in {countdown}s</Typography>
      </div>
    }
  </motion.div>;

};

export default Home;