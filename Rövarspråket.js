function rovarspraket(text) {
  let rovarspraketVar = text.toLowerCase();
  let ro = ""
  var i;
  for (i = 0; i < text.length; i++) {
    if (isNaN(text[i])) {
        if (rovarspraketVar[i] === "a" || rovarspraketVar[i] === "e" || rovarspraketVar[i] === "i" || rovarspraketVar[i] === "o" || rovarspraketVar[i] === "u")
          { ro = ro.concat(rovarspraketVar[i])
        }
        else {
          ro = ro.concat(rovarspraketVar[i], "o" ,rovarspraketVar[i])
        }
      }
      else {
      return false;
    };
    return ro
  };
};
