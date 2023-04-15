function convert() {
    const paragraph = document.getElementById("paragraph").value;
    const words = paragraph.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = "<b>" + words[i][0] + "</b>" + words[i].substr(1);
    }
    const result = words.join(" ");
    document.getElementById("result").innerHTML = result;
  }