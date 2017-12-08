const User = require('./user.js')
const md5 = require('md5')

//console.log(md5('202cb962ac59075b964b07152d234b70'))

function inset() {
  let user = new User({
    username: "stutter",
    email: "452061213@qq.com",
    password: md5("123")
  })
  user.save(function (err, res) {
    if (err) {
      console.log("ERROR" + err)
    } else {
      console.log("RES " + res)
    }
  })
}


function update() {
  var wherestr = { 'name': 'mavin' }
  var updatestr = { 'password': 'zzz' }  //将用户名更新为“tiny”  

  User.update(wherestr, updatestr, (err, res) => {
  if (err) {
    console.log("ERROR" + err)
    } else {
      console.log(res)
    }
  })
}

function remove() {
  User.remove(wherestr, function (err, res) {
  if (err) {
    console.log("error" + err)
    } else {
      console.log(res)
    }
  })
}

inset()
