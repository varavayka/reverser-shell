import net from 'net'
import {createReadStream,createWriteStream} from 'fs'
import { Transform } from 'stream'
import {createGzip} from 'zlib'
import path from 'path'
import { stdout } from 'process'
function download(file,socket) {
  
  const transform = new Transform({
    transform(chunk,ecnoding, cb) {
      socket.write(chunk)
      
    }
  })
  createReadStream(`./${file}`)
  .pipe(transform)
  
}


export default download