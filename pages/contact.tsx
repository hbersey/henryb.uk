import { Form, Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import axios from 'axios';
import { motion } from 'framer-motion';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'That\'s a bit short...')
    .max(50, 'Long name you got there!')
    .required('First name required!'),
  lastName: Yup.string()
    .min(2, 'That\'s a bit short...')
    .max(50, 'Long name you got there!'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email address requiredProp `className` did not match. Server!'),
  message: Yup.string()
    .required('Message required!')
});

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  message: ''
};

const Contact = () => {

  return <motion.div style={{ width: '100vw' }} initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant={'h3'}>Contact</Typography>
    </motion.div>
    <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const data = (({ email, firstName, lastName, message }) => ({
                email,
                firstName,
                lastName,
                message
              }))(values);

              await axios.post('http://api.henryb.uk/contact', data);
              setSubmitting(false);
            }}>
      {({ submitForm, isSubmitting, isValid }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Field component={TextField} name={'firstName'} type={'name'} label={'First Name'} fullWidth
                       style={{ underline: 'blue' }} id={'firstName'} />
              </motion.div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <Field component={TextField} name={'lastName'} type={'name'} label={'Last Name'} fullWidth
                       id={'lastName'} />
              </motion.div>
            </Grid>
          </Grid>
          <br />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <Field component={TextField} name={'email'} type={'email'} label={'Email Address'} fullWidth id={'email'} />
          </motion.div>
          <br />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <Field component={TextField} name={'message'} multiline label={'Message'} fullWidth id={'message'} />
          </motion.div>
          <br />
          <br />
          {isSubmitting && <LinearProgress />}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <Button variant={'contained'} disabled={!isValid || isSubmitting} color={'secondary'} onClick={submitForm}
                    aria-label={'Send'}>
              Contact
            </Button>
          </motion.div>
        </Form>
      )}
    </Formik>

  </motion.div>;

};


export default Contact;