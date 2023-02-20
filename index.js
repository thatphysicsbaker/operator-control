// Assignmnet Question 3//
// prompt user for class group//
let classGroup = prompt ("What is your class group?(Science, Social Science, or Arts)");

// check which subjects to assign based on class group//

if (classGroup === "Science") {
    var subjects = ["Physics", "Chemistry", "Biology", "Technical Drawing", "English", "Mathematics"];
}
else if (classGroup === "Social Science") {
    var subject = ["Accounting", "Commerce", "Marketing", "Geography", "English", "Mathematics"];
}
else if (classGroup === "Arts") {
    var subjects = ["Government", "Economics", "Literature", "History", "English", "Mathematics"];
}
else {
    var subject = ["English", "Mathematics"];
    console.log("Invalid class group. Assigning General subjects");
}

// display assigned subjects console.log("Your assigned subjects are: " + subjects.join(","));
