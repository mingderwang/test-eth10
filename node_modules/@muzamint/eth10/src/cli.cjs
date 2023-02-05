#!/usr/bin/env node

require("yargs")
  .scriptName("eth10")
  .usage("$0 <cmd> [args]")
  .command(
    "hello [name]",
    "To run eth10 p2p payment tests",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "Ming",
        describe: "the name to say hello to",
      });
    },
    function (argv) {
      console.log("hello", argv.name, "welcome to yargs!");
    }
  )
  .help().argv;