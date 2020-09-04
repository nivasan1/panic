import { withFormik } from 'formik';
import { connect } from 'react-redux';
import PagerDutyForm from '../../components/channels/forms/pagerDuty_form';
import PagerDutyTable from '../../components/channels/tables/pagerDuty_table';
import { addPagerDuty, removePagerDuty } from '../../redux/actions/channelActions';
import PagerDutySchema from './schemas/pagerDutySchema';

const Form = withFormik({
  mapPropsToErrors: () => ({
    configName: '',
    apiToken: '',
    integrationKey: '',
  }),
  mapPropsToValues: () => ({
    configName: '',
    apiToken: '',
    integrationKey: '',
    info: false,
    warning: false,
    critical: false,
    error: false,
  }),
  validationSchema: (props) => PagerDutySchema(props),
  handleSubmit: (values, { resetForm, props }) => {
    const { savePagerDutyDetails } = props;
    const payload = {
      configName: values.configName,
      apiToken: values.apiToken,
      integrationKey: values.integrationKey,
      info: values.info,
      warning: values.warning,
      critical: values.critical,
      error: values.error,
    };
    savePagerDutyDetails(payload);
    resetForm();
  },
})(PagerDutyForm);

const mapStateToProps = (state) => ({
  pagerDuties: state.ChannelsReducer.pagerDuties,
});

function mapDispatchToProps(dispatch) {
  return {
    savePagerDutyDetails: (details) => dispatch(addPagerDuty(details)),
  };
}

function mapDispatchToPropsRemove(dispatch) {
  return {
    removePagerDutyDetails: (details) => dispatch(removePagerDuty(details)),
  };
}

const PagerDutyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

const PagerDutyTableContainer = connect(
  mapStateToProps,
  mapDispatchToPropsRemove,
)(PagerDutyTable);

export {
  PagerDutyFormContainer,
  PagerDutyTableContainer,
};
