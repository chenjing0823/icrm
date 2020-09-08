/*
 * @Author: jing.chen
 * @Date: 2020-08-20 09:42:23
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:46:30
 * @Description:
 */
const { exec } = require('child_process')
// const exec = require('child_process').exec
const target = process.argv[2]
const port = process.argv[3] ? Number(process.argv[3]) : 8080
const cmd = 'npm run serve -- --env.target=' + (target || '') + ' --env.port=' + port + ' --color always'

const temp = exec(
  cmd,
  {
    detached: true,
    maxBuffer: 8 * 1024 * 1024 // 5m
  },
  function (error, stdout, stderr) {
    if (error) console.log(error)
  }
)
temp.stdout.pipe(process.stdout)
