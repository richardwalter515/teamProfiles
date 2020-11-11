const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

askQuestions();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function askQuestions() {
  inquirer.prompt([
    {
      type: "list",
      message: "What kind of employee would you like to add?",
      name: "employeeType",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ],
    }]).then(function(employee){
      employDetails(employee.employeeType) 
    });
  };

    function employDetails(role) {
      if (role === "Manager") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?"
          },
          {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email?"
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
          },
        ]).then(function(employee) {
          var manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
          employees.push(manager);
        }).then(function(){
          inquirer.prompt({
            type: "list",
            message: "Would you like to add another employee?",
            name: "nextEmp",
            choices: [
              "Yes",
              "No",]
          }).then(function(want) {
            if (want.nextEmp === "Yes") {
              askQuestions();
            } else {
              var htmlText = render(employees);
              var filename = "team.html";
              fs.writeFile(filename, htmlText, function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("Created Employee HTML!");
              });
            }
          })
        });
      } else if (role === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?"
          },
          {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email?"
          },
          {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?"
          },
        ]).then(function(employee) {
          var engineer = new Engineer(employee.name, employee.id, employee.email, employee.gitHub);
          employees.push(engineer);
        }).then(function(){
          inquirer.prompt({
            type: "list",
            message: "Would you like to add another employee?",
            name: "nextEmp",
            choices: [
              "Yes",
              "No",]
          }).then(function(want) {
            if (want.nextEmp === "Yes") {
              askQuestions();
            } else {
              var htmlText = render(employees);
              var filename = "team.html";
              fs.writeFile(filename, htmlText, function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("Created Employee HTML!");
              });
            }
          })
        });
      } else {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?"
          },
          {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email?"
          },
          {
            type: "input",
            name: "school",
            message: "Where are you currently enrolled?"
          },
        ]).then(function(employee) {
          var intern = new Intern(employee.name, employee.id, employee.email, employee.school);
          employees.push(intern);
        }).then(function(){
          inquirer.prompt({
            type: "list",
            message: "Would you like to add another employee?",
            name: "nextEmp",
            choices: [
              "Yes",
              "No",]
          }).then(function(want) {
            if (want.nextEmp === "Yes") {
              askQuestions();
            } else {
              var htmlText = render(employees);
              var filename = "team.html";
              fs.writeFile(filename, htmlText, function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("Created Employee HTML!");
              });
            }
          })
        });
      }
    }
  
    //   if (employee.employeeType === "Manager") {
        
  
    //     })
    //     inquirer.prompt([
    //       {
            // type: "list",
            // message: "Would you like to add another employee?",
            // name: "nextEmp",
            // choices: [
            //   "Yes",
            //   "No",
    //         ],
    //       }
        // ]).then(function(want) {
        //   console.log('want:', want)
        //   if (want.nextEmp === "Yes") {
        //     askQuestions();
    //       } else {
            // var htmlText = render(employees);
            // var filename = "team.html";
            // fs.writeFile(filename, htmlText, function(err) {
            //   if (err) {
            //     return console.log(err);
            //   }
            //   console.log("Created Employee HTML!");
            // });
          // }
    //     }
    //     )
    //   } else if (employee.employeeType === "Engineer") {
    //     inquirer.prompt([
          
    //     ]).then(function(employee) {
    //       var manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
    //       employees.push(manager);
  
    //     }).then(inquirer.prompt([
    //       {
    //         type: "list",
    //         message: "Would you like to add another employee?",
    //         name: "nextEmp",
    //         choices: [
    //           "Yes",
    //           "No",
    //         ],
    //       }
    //     ])).then(function(want) {
    //       if (want.nextEmp === "Yes") {
    //         askQuestions();
    //       } else {
    //         var htmlText = render(employees);
    //         var filename = "team.html";
    //         fs.writeFile(filename, htmlText, function(err) {
    //           if (err) {
    //             return console.log(err);
    //           }
    //           console.log("Created Employee HTML!");
    //         });
    //       }
    //     }
    //     )
    //   } else {
    //     inquirer.prompt([
          
    //     ]).then(function(employee) {
    //       var manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
    //       employees.push(manager);
  
    //     }).then(inquirer.prompt([
    //       {
    //         type: "list",
    //         message: "Would you like to add another employee?",
    //         name: "nextEmp",
    //         choices: [
    //           "Yes",
    //           "No",
    //         ],
    //       }
    //     ])).then(function(want) {
    //       if (want.nextEmp === "Yes") {
    //         askQuestions();
    //       } else {
    //         var htmlText = render(employees);
    //         var filename = "team.html";
    //         fs.writeFile(filename, htmlText, function(err) {
    //           if (err) {
    //             return console.log(err);
    //           }
    //           console.log("Created Employee HTML!");
    //         });
    //       }
    //     }
    //     )
    //   }
    // }


  // var htmlText = render(employees);
  // var filename = "team.html";
  // fs.writeFile(filename, htmlText, function(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Created Employee Object!");
  // });
  
  // After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// render(employees);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


  
// Create manager, engineer, and interns

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
