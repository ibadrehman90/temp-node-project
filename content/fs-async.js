// file system module (Async Way)

const {readFile, writeFile} = require('fs')
//  for async to work we need a callback

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result

        writeFile(
            './content/result-async.txt',`here is the result: ${first},${second}`,(err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })

})
