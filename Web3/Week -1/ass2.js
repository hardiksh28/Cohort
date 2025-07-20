const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = "100xdevs";
    while(true){
        let inputStr = "100xdevs"+input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(prefix)){
            return{input:inputStr,hash:hash};
        }
        input++;
    }
}

const result= findHashWithPrefix('0');
console.log(`Input:${result.input}`);
console.log(`Hash:${result.hash}`);