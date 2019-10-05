
const fs = require('fs');
const http = require('http');
const url = require('url');

//data - це дані з документу, який ми читаємо через readFile
// дані в термінал прийдуть баффером. двійковою системою.
// найчастіше використовується

// fs.readFile('./file.txt',(err, data)=> {
//     console.log(data.toString());
// });
//
//
// // create files
// let data = 'My name is Sunny';
// fs.writeFile('./text.txt', data, (err)=> {
//    if(!err){
//        console.log('ok');
//    }
// });


//add text to file
//можна і через змінну зовні додавати, а можна одразу на місці data писати, що нам треба

// fs.appendFile('./text.txt',`\n${Date.now()} user is created`, err => {
//     if(!err){
//         console.log('ok');
//     }
// });


// //statistic of text
// fs.stat('./text.txt', function(err, info){
//     console.log(info);
// });


//видаляє символи з кінця і лишає стільки, скільки вкажем
// fs.truncate('./text.txt', 5, (err)=> {
//     if (!err) {
//         console.log('ok');
//     }
// });


//delete file, folder
// fs.unlink('./text.txt', (err)=> {
//     if (!err) {
//         console.log('ok');
//     }
// });


// fs.readdir('./newDer', (err, files)=> {
//     if (err) {
//         throw err;
//     } else {
//         console.log(files);
//     }
// });

// fs.rename('./dir', './dir', (err)=> {
//     if(!err) {
//         console.log('ok');
//     }
// });

fs.rename('./dir/index.html', './index.html', (err)=> {
    if (!err) {
        console.log('OK');
    }
});


// fs.mkdir('./ddd', (err)=>{
//     if(!err){
//         console.log('ok');
//     }
// });

//STREAM STRERAM STREAM STREAM

// let writeStream = fs.createWriteStream('./info22.txt');
//
// let readStream = fs.createReadStream('./info.txt');
// readStream.on('data', function (chunk) {
//
//     writeStream.write(chunk)
// });


// for (let i = 0; i < 1000000; i++) {
//     writeStream.write('Hello World');
//
// }

// fs.createReadStream('./text.txt').pipe(fs.createWriteStream('./newFile.txt'));
// console.log('ok');


//err err err як ловити, як обробляти

// function dillenia(firstNum, secondNum, cb) {
//     setTimeout(()=>{
//         if(secondNum === 0) {
//             throw new Error('second number = 0')
//         } else {
//             let res = firstNum/secondNum
//             cb(res)
//         }
//     },500)
// }
// відловити помилку
//тут трохи не так, бо треба, щоб помилка була між try and catch
// try {
//     dillenia(20,2, (result)=>{
//         console.log(result);
//     });
// } catch (error) {
//     console.log(error.message);
// }

// MODULE HTTP - теж вбудований в Node.js дозволяє створювати сервер


const server = http.createServer((req, res)=> {
// fs.readFile('./index.html', (err, data)=> {
//     res.end(data)
// });

    //щоб дані з форми що ввели вивести об'єктом:
    //console.log(parsedUrl.query); query з url данних
    let parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    switch(parsedUrl.pathname) {
        case '/':
            fs.readFile('./index.html', (err, data)=> {
             res.end(data);
            });
            break;
        case '/index2.html':
            fs.readFile('./index2.html', (err, data)=> {
                res.end(data);
            });
            break;
        default:
            fs.readFile('./404.html', (err, data)=> {
                res.end(data);
            });
    }

});

server.listen(3000, (err)=>{
    if (err) {
        console.log('erora');
    } else {
        console.log('Listen 3000');
    }
});







