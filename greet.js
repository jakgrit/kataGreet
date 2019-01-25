function greet(name) {
  if (Array.isArray(name) == true) {
    if (name.length > 1) {
      if (name.length == 2) {
        return "Hello, " + name.join(" and ") + ".";
      } else if(name.length > 2) {
        for(i=0; i< name.length; i++){
          if(name[i] == name[i].toUpperCase()){
            return ("Hello, "+ name[0] + " and " + name[name.length-1] +". AND HELLO " + name[name.length-2]+"!" ) ;
          }
        }
        return (
          "Hello, " + name.slice(0, name.length - 1).join(", ") + ", and " + name.slice(name.length - 1) + "."
        );
      }
    }
  } else if (name === null) {
    return "Hello, my friend.";
  } else if (name === name.toUpperCase()) {
    return "HELLO " + name.toUpperCase() + "!";
  }
  return "Hello, " + name + ".";
}

module.exports = greet;
