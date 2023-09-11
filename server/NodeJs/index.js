// const fs = require('fs');
// // console.log(fs)

// function readFile(){
//     fs.readFile('sample.txt','utf8',(err,data)=>{
//         if (err){
//             console.log("Error reading sample.txt")
//             return
//         }
//         console.log('successfully read sample.txt',data)
//     })
// }

// readFile()

//path module
// const path = require('path');
// const filePath ='User/users/sample.txt'
// const fileName = path.basename(filePath)
// const directory = path.dirname(filePath)
// const extName = path.extname(filePath)
// const isAbsolute = path.isAbsolute(filePath)
// const pathJoin = path.join('Students','classes','samples.txt')

// console.log(fileName)
// console.log(directory)
// console.log(extName)
// console.log(isAbsolute)
// console.log(pathJoin)

//os module
// const os = require('os');
// const arch = os.arch(); // Note the function call here
// const platform = os.platform(); // Note the function call here
// const version = os.version();
// const network = os.networkInterfaces();

// console.log(os);
// console.log(arch);
// console.log(platform);
// console.log(version);
// console.log(network);
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());

//http module
// const http = require('http');

// // Create a simple HTTP server
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("hello world!");
//     res.end();
// }).listen(8080);

// // Make an HTTP GET request
// const options = {
//     hostname: 'localhost',
//     port: 8080,
//     path: '/',
//     method: 'GET'
// };

// const req = http.request(options, (res) => {
//     let data = ' hi ';

//     res.on('data',(chunk)=>{
//         data = data+chunk;

//     });

//     res.on('end', () => {
//         console.log(data);
//     });
// });

// req.on('error', (e) => {
//     console.error(`Error: ${e.message}`);
// });

// req.end();


//Event Emitter
// const events =require('events');
// const eventEmitter =new events.EventEmitter();
// // console.log(eventEmitter)
// eventEmitter.on('hello',()=>{
//     console.log('Event is  detected');
// })
// eventEmitter.emit('hello');

