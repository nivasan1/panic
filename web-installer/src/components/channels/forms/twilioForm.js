import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { TestCallButton } from '../../../utils/buttons/channelsButtons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
}));

const TwilioForm = (props) => {
  const classes = useStyles();

  const {
    errors,
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = props;

  const updateTwilioNumbers = (phoneNums) => {
    setFieldValue('twilioPhoneNumbersToDialValid', phoneNums);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Box p={3}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={2}>
              <Typography> Configuration Name: </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                error={!errors.configName !== true}
                value={values.configName}
                type="text"
                name="configName"
                placeholder="twilio_caller_main"
                helperText={errors.configName ? errors.configName : ''}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Typography> Account Sid: </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                error={!errors.accountSid !== true}
                value={values.accountSid}
                type="text"
                name="accountSid"
                placeholder="abcd1234efgh5678ABCD1234EFGH567890"
                helperText={errors.accountSid ? errors.accountSid : ''}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Typography> Authentication Token: </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                error={!errors.authToken !== true}
                value={values.authToken}
                type="text"
                name="authToken"
                placeholder="1234abcd5678efgh1234abcd5678efgh"
                helperText={errors.authToken ? errors.authToken : ''}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Typography> Twilio Phone Number: </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                error={!errors.twilioPhoneNo !== true}
                value={values.twilioPhoneNo}
                type="text"
                name="twilioPhoneNo"
                placeholder="+12025551234"
                helperText={errors.twilioPhoneNo ? errors.twilioPhoneNo : ''}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Typography> Phone numbers to dial: </Typography>
            </Grid>
            <Grid item xs={10}>
              <Autocomplete
                multiple
                freeSolo
                options={[]}
                onChange={updateTwilioNumbers}
                value={values.twilioPhoneNumbersToDialValid}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    error={!errors.twilioPhoneNumbersToDialValid !== true}
                    type="text"
                    name="twilioPhoneNumbersToDialValid"
                    placeholder="Add Phone Numbers"
                    variant="standard"
                    helperText={errors.twilioPhoneNumbersToDialValid ? errors.twilioPhoneNumbersToDialValid : ''}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={4}>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Box px={2}>
                  <TestCallButton
                    disabled={!(Object.keys(errors).length === 0)}
                    twilioPhoneNumbersToDialValid={
                      values.twilioPhoneNumbersToDialValid
                        ? values.twilioPhoneNumbersToDialValid : []
                    }
                    accountSid={values.accountSid}
                    authToken={values.authToken}
                    twilioPhoneNo={values.twilioPhoneNo}
                  />
                  <Button
                    variant="outlined"
                    size="large"
                    disabled={!(Object.keys(errors).length === 0)}
                    type="submit"
                  >
                    <Box px={2}>
                      Add
                    </Box>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

TwilioForm.propTypes = {
  errors: PropTypes.shape({
    configName: PropTypes.string,
    accountSid: PropTypes.string,
    authToken: PropTypes.string,
    twilioPhoneNo: PropTypes.string,
    twilioPhoneNumbersToDialValid: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    configName: PropTypes.string.isRequired,
    accountSid: PropTypes.string.isRequired,
    authToken: PropTypes.string.isRequired,
    twilioPhoneNo: PropTypes.string.isRequired,
    twilioPhoneNumbersToDialValid: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default TwilioForm;
