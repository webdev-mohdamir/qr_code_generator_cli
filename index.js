// This is the entry point of our CLI application

// Importing required modules
import inquirer from "inquirer"; // For user input
import qr from "qr-image"; // For generating QR code
import fs from "fs"; // For file system operations

// Define the questions to be asked to the user
const questions = [
  {
    name: "url",
    message: "Enter the Url you want to convert: \n",
  },
];

// Prompt the user with the questions
const prompt = inquirer.prompt(questions, {});

// Wait for the user to respond
const answers = await prompt;

// Get the user's answer
const answer = answers["url"];

// Generate the QR code
const qr_svg = qr.image(answer, { type: "svg" });

// Create a writable stream to write the QR code to a file
const createImageStream = fs.createWriteStream("qr_code.svg");

// Pipe the generated QR code to the file
qr_svg.pipe(createImageStream);

// saving the user answer to the file
fs.writeFile("answer.txt", `\n ${answer}`, { flag: "a+" }, function (err) {
  if (err) throw err;
  console.log("It's saved!");
});
