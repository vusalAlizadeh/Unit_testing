//Checking email function

function validateEmailAddress(emailAddress) {
  let atSymbol = emailAddress.indexOf("@");
  let lastDotSymbol = emailAddress.lastIndexOf(".");
  let firstDotSymbol = emailAddress.indexOf(".");
  let spaceSymbol = emailAddress.indexOf(" ");

  // Check for .. or somethings like this dots :d
  if (emailAddress.split("@")[0].includes("..")) {
    throw new Error("Email address is not valid");
  }

  if (
    atSymbol !== -1 &&
    atSymbol !== 0 &&
    lastDotSymbol !== -1 &&
    firstDotSymbol !== 0 &&
    lastDotSymbol > atSymbol + 1 &&
    emailAddress.length > lastDotSymbol + 1 &&
    spaceSymbol === -1
  ) {
    return `${emailAddress} is valid`;
  } else {
    throw new Error("Email address is not valid");
  }
}

module.exports = validateEmailAddress;
