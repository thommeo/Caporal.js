#!/usr/bin/env node
const { program } = require("@caporal/core")

program
  .argument("<year>", "Year of birth", { validator: program.NUMBER })
  .action(({ logger, args }) => {
    // will print something like: "year: 1985 (type: number)"
    logger.info("year: %d (type: %s)", args.year, typeof args.year)
  })

program.run()
