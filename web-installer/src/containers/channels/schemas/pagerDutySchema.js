import * as Yup from 'yup';

const PagerDutySchema = (props) => Yup.object().shape({
  configName: Yup.string()
    .test(
      'unique-config-name',
      'PagerDuty config name is not unique.',
      (value) => {
        const { pagerDuties } = props;
        if (pagerDuties.length === 0) {
          return true;
        }
        for (let i = 0; i < pagerDuties.length; i += 1) {
          if (pagerDuties[i].configName === value) {
            return false;
          }
        }
        return true;
      },
    )
    .required('Config name is required.'),
  apiToken: Yup.string()
    .required('API token is required.'),
  integrationKey: Yup.string()
    .required('Integration key is required.'),
});

export default PagerDutySchema;
