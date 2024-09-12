#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
  title: "⚡ Hello there ! ⚡",
  titleAlignment: "center",
  borderStyle: "round",
  width: 75,
  padding: 1,
  borderColor: "#FFF200",
};

const data = {
  intro: chalk
    .hex("#FFFADD")
    .bold("I'm Vijay, your friendly neighbourhood developer."),
  roles: chalk.hex("#97FFF4")(
    "FullStack Developer | UI/UX Designer | Pursuing BTech IT | Open Source Enthusiast | Pre-final year student | Tech Enthusiast | Freelancer"
  ),
  twitter: chalk.white.bold("https://twitter.com/") + chalk.cyan("mr_vijay_a_"),
  github: chalk.white.bold("https://github.com/") + chalk.green("Vijay-Hozo"),
  linkedin : chalk.white.bold("https://linkedin.com/in/") + chalk.blue("mr-vijay"),
  Socials: chalk.white.bold("https://shor.by/") + chalk.cyan("vijay-a"),
  Portfolio: chalk.white.bold("https://") + chalk.hex("#97FFF4")("avijay.tech"),
  gmail: chalk.red("avijay.personal@gmail.com"),
  labelTwitter: chalk.bgHex("#FFF").hex("#00acee").bold("           Twitter"),
  labelGitHub: chalk.bgBlack.white.bold("     GitHub"),
  labelLinkedIn: chalk.bgHex("#0072b1").hex("#fef9f3").bold("         LinkedIn"),
  labelWeb: chalk.bgHex("#FFE7CE").hex("#071A52").bold("            Socials"),
  labelPortfolio: chalk.bgHex("#9400FF").hex("#fef9f3").bold("      Portfolio"),
  labelGmail: chalk.bgRed.white.bold("      Gmail "),
};

const newline = "\n";
const introduction = `${data.intro}`;
const roles = `${data.roles}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.Socials}`;
const portfolio = `${data.labelPortfolio}  ${data.Portfolio}`;
const gmail = `${data.labelGmail}: ${data.gmail}`;

const output =
  newline +
  newline +
  newline +
  introduction +
  newline +
  roles +
  newline +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  portfolio +
  newline +
  gmail +
  newline +
  newline;

console.log(boxen(chalk.white(output), options));
