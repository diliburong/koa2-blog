const User = require('./user.js')


function inset() {
    let user = new User({
        name: "mavin",
        password: "333"
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
