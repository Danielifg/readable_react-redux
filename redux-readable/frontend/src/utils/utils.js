//import Hashids from 'hashids'
import CryptoJS from 'crypto-js'
import UIDGenerator from 'uid-generator'





export function setUUID(){
  const uidgen = new UIDGenerator();

  // Async with `await`
//const i =  await uidgen.generate(); // -> 'B1q2hUEKmeVp9zWepx9cnp'

  // Async with promise
  uidgen.generate()
    .then(uid => console.log(uid)); // -> 'PXmRJVrtzFAHsxjs7voD5R'

  // Async with callback
  uidgen.generate((err, uid) => {
    if (err) throw err;
    console.log(uid); // -> '4QhmRwHwwrgFqXULXNtx4d'
  });

  // Sync
  uidgen.generateSync(); // -> '8Vw3bgbMMzeYfrQHQ8p3Jr'
}


export function cryptoJS(){
  // Encrypt
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

// Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

// Full Object encryption
// Doc crypto-js https://github.com/brix/crypto-js
}



export function generateId(){
  //let hashids = new Hashids();
   let num = Math.floor(Math.random()*1000980) + 2340;
   //let id = hashids.encode(num);
  return num
}
