import commands, { websiteCommands, socialsCommands } from './commands';
import { useState, useRef } from 'react';

function Terminal() {
  /* set default states for blank input and initial output message */
  const [input, setInput] = useState('');
  const [output, setOutput] = useState("Hi! I'm Yubraj's personal assistant! How can I help you? Type 'help' for a list of commands.");
  const inputRef = useRef();
  const [commandContext, setCommandContext] = useState(null);

  return (

    <div /* on click, focus on input */

      onClick={(e) => {
        inputRef.current.focus();
      }}
      className="bg-[rgba(37,42,51,255)] dark:bg-[rgba(221,221,221,255)] text-black drop-shadow  w-full overflow-auto pl-14 box-border h-full bg-center bg-opacity-0 bg-cover "
    >

      {/*  output is displayed here styled white */}
      <div className="whitespace-pre-line text-white dark:text-black drop-shadow-md  mb-4  mt-10 text-[1.2rem]">{output}</div>
      {/* default user is displayed here styled pink */}
      <span className="flex text-white  dark:text-black drop-shadow-md mb-50   ">
        $Yubraj/Home:&nbsp;
        {/* input box is displayed here styled white */}
        <input
          ref={inputRef}

          className="border-none outline-none m-0 p-0 
				bg-transparent color-white w-full text-white dark:text-black drop-shadow  "
          value={input}
          onChange={(e) => setInput(e.target.value)} /* on change, update input */
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const userInput = input.trim().toLowerCase(); /* trim white space and make lowercase */
              let newOutput = '';
              newOutput = output + '\n'; /* add new line to output */
              /* add user input to output if type is standard is text with no nested context */
              if (commands.hasOwnProperty(userInput)) {
                const commandResult = commands[userInput]();
                if (commandResult.type === 'text') {
                  newOutput += commandResult.value;
                } else if (commandResult.type === 'link') { /* if type is link, open link in new tab. More types and actions to do with them made here. Can add image type for example */
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`; /* add link to output */
                } else if (commandResult.type === 'clear') {
                  window.location.reload();
                }

                if (commandResult.context) {
                  setCommandContext(commandResult.context);
                } else {
                  setCommandContext(null);
                }  /* change context to nested context if there is one */
              } else if (commandContext === 'websites' && websiteCommands.hasOwnProperty(userInput)) {
                const commandResult = websiteCommands[userInput]();
                if (commandResult.type === 'link') {
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`;
                }
                setCommandContext(null);
              } else if (commandContext === 'socials' && socialsCommands.hasOwnProperty(userInput)) {
                const commandResult = socialsCommands[userInput]();
                if (commandResult.type === 'link') {
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`;
                }
                setCommandContext(null);
              } else { /* if command is not found, display error message */
                newOutput += 'Command not found';
              }
              setOutput(newOutput); /* update output */
              setInput('');	/* clear input */
            }
          }}
        />
      </span>


    </div>
  );
}

export default Terminal;
