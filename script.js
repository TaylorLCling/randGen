var exec = require('child_process').exec;
exec('node server/index.js', (error, stdout, stderr) => {
  console.log(stdout);
});