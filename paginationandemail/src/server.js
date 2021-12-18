
const app = require("./index");

const connect = require("./config/db");

// console.log(connect);

app.listen(2345, async function() {
    await connect();
    console.log("listening on part 2345");
    
});

