import net from 'net'
import { stdin, stdout } from 'process'
import { createReadStream, createWriteStream,writeFile } from 'fs'
import { Transform } from 'stream'

net.createServer((socket) => {
  console.log('[+] client connected!')
  
  stdin.on('data', chunk => {
   
    socket.write(chunk.toString())
  })
  socket.on('data', (data) => {
    createWriteStream('./test.mjs', data)
    
  })
  

}).listen(4444, () => console.log('[+] Listener is work...'))


