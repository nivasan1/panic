import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import {
  TextField, Typography, Box, Grid, Switch, FormControlLabel, Tooltip,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { NEXT, BACK } from '../../../../constants/constants';
import StepButtonContainer from 'containers/chains/common/stepButtonContainer';
import { PingNodeExporter } from '../../../../utils/buttons';
import { defaultTheme, theme } from '../../../theme/default';
import Button from "components/material_ui/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/material_ui/Grid/GridContainer.js";
import GridItem from "components/material_ui/Grid/GridItem.js";

/*
 * Contains the details to setup a KMS configuration to be monitored, this also
 * has the functionality to test the Node Exporter IP address that will be given.
 */
const useStyles = makeStyles(styles);

const KmsForm = ({errors, values, handleSubmit, handleChange, setFieldValue,
  data}) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div>
        <div className={classes.subsection}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>
                  {data.kmsForm.title}
              </h1>
            </GridItem>
          </GridContainer>
        </div>
        <Typography variant="subtitle1" gutterBottom className="greyBackground">
          <Box m={2} p={3}>
            <p>{data.kmsForm.description}</p>
          </Box>
        </Typography>
        <Divider />
        <Box py={4}>
          <form onSubmit={handleSubmit} className="root">
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={2}>
                <Typography> KMS Name </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  error={errors.kmsName}
                  value={values.kmsName}
                  type="text"
                  name="kmsName"
                  placeholder={data.kmsForm.nameHolder}
                  helperText={errors.kmsName ? errors.kmsName : ''}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <Grid container justify="center">
                  <MuiThemeProvider theme={theme}>
                    <Tooltip title={data.kmsForm.nameTip} placement="left">
                      <InfoIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Typography> Node Exporter URL </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  error={errors.exporterUrl}
                  value={values.exporterUrl}
                  type="text"
                  name="exporterUrl"
                  placeholder={data.kmsForm.exporterUrlHolder}
                  helperText={errors.exporterUrl ? errors.exporterUrl : ''}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <Grid container justify="center">
                  <MuiThemeProvider theme={theme}>
                    <Tooltip
                      title={data.kmsForm.exporterUrlTip}
                      placement="left"
                    >
                      <InfoIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Typography> Monitor KMS </Typography>
              </Grid>
              <Grid item xs={1}>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={values.monitorKms}
                      onClick={() => {
                        setFieldValue('monitorKms', !values.monitorKms);
                      }}
                      name="monitorKms"
                      color="primary"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Grid container justify="center">
                  <MuiThemeProvider theme={theme}>
                    <Tooltip
                      title={data.kmsForm.monitorKmsTip}
                      placement="left"
                    >
                      <InfoIcon />
                    </Tooltip>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={8} />
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Box px={2}>
                    <PingNodeExporter
                      disabled={(Object.keys(errors).length !== 0)}
                      exporterUrl={values.exporterUrl}
                    />
                    <Button
                      color="primary"
                      size="md"
                      disabled={(Object.keys(errors).length !== 0)}
                      type="submit"
                    >
                        Add KMS
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Box px={2}>
                  <StepButtonContainer
                    disabled={false}
                    text={BACK}
                    navigation={data.kmsForm.backStep}
                  />
                </Box>
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={2}>
                <Box px={2}>
                  <StepButtonContainer
                    disabled={false}
                    text={NEXT}
                    navigation={data.kmsForm.nextStep}
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </MuiThemeProvider>
  );
};

KmsForm.propTypes = forbidExtraProps({
  errors: PropTypes.shape({
    kmsName: PropTypes.string,
    exporterUrl: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    kmsName: PropTypes.string.isRequired,
    exporterUrl: PropTypes.string.isRequired,
    monitorKms: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  data: PropTypes.shape({
    kmsForm: PropTypes.shape({
      description: PropTypes.string.isRequired,
      exporterUrlHolder: PropTypes.string.isRequired,
      nameHolder: PropTypes.string.isRequired,
      nameTip: PropTypes.string.isRequired,
      exporterUrlTip: PropTypes.string.isRequired,
      monitorKmsTip: PropTypes.string.isRequired,
      backStep: PropTypes.string.isRequired,
      nextStep: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
});

export default KmsForm;
