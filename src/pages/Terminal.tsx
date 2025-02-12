import { useEffect, useState } from 'react'
import './terminal.css'

const Terminal = () => {

const [current, setCurrent] = useState('T:/main> ')
const [command, setCommand] = useState('')
const allCommands =['help', 'time','music', 'email']

const commands = [{
    title: 'help',
    response: "\n Here's a list of commands you can use: \n help \n time \n music \n email \n exit"
},
{
    title: 'time',
    response: "\n Now is " + new Date().toLocaleTimeString()
},

{
    title: 'music',
    response: "\n I make music under 'i wanna lay in salt', '0xa' and 過去系 \n You can find me on Soundcloud, Bandcamp, Spotify, Apple Music and Youtube."
},

{
    title: 'email',
    response: "\n If you need to e-mail me for any circumstances, try me on taylor@tyfee.top!"
}
]

var thisCommand: any[string] = []
function onType(e: KeyboardEvent){
console.log(e.key)

if(e.key == 'Backspace'){
    setCommand((prevCommand) => prevCommand.slice(0, -1));
 
    thisCommand.pop()
    
}
else if(e.key == 'Enter'){
console.log(thisCommand.join(''))
if(allCommands.includes(thisCommand.join(''))){
    setCurrent((prev) => prev + " " +  thisCommand.join('') + commands.find((i) => i.title == thisCommand.join(''))?.response + "\n" +current)

setCommand('')
thisCommand = []
}else{
    setCurrent((prev) => prev + " " +  thisCommand.join('') + "\n" + "command '" + thisCommand.join('') + "' not found! Try 'help'." + "\n" +current)

    setCommand('')
    thisCommand = []
}
}else{
setCommand((prevCommand) => prevCommand + e.key)
thisCommand.push(e.key)
console.log(thisCommand)
}
}

useEffect(() => {
window.addEventListener('keydown', onType)
}, [])

    return (
        <>
        
        <div  className='div' style={{
                whiteSpace: "pre-line",
              overflow: 'scroll',
            textAlign: 'start',
            backgroundColor: 'rgb(0, 0,0)',
            height: '400px'}}>
                <strong className='current' style={{padding: '10px'}}>{current}  {command}</strong>
                </div>
                </>
    )
}

export default Terminal