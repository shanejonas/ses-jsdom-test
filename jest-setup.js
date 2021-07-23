// eslint-disable-next-line import/no-unassigned-import
require('ses');

console.log('about to lockdown');

global.lockdown({
  mathTaming: 'unsafe',
  errorTaming: 'unsafe',
  dateTaming: 'unsafe',
});

console.log('locked down now');
