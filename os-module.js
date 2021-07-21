const os = require('os')

// info about current user

const user = os.userInfo()

console.log(user);

// method returns the systems uptime in seconds

console.log(os.uptime());

// OS specs

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);