var _ = require('lodash');

var localEnvVars = {
  TITLE:      'daily_tasks',
  SAFE_TITLE: 'daily_tasks'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
