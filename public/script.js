let textBase = "Somos especialistas en ";
let jobs = ["diseño web.", "cableado estructurado."];
let jobIdx = 0;
let i = 0;
let reverse = false;

function typeWriter() {
  // Generate some random text jitter between 45 and 75 ms to simulate a keyboard
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  // Check if we want to remove text ('reverse'), or add it.
  if (reverse) {
    if (document.getElementById("text").innerHTML.length > textBase.length) {
      // We're still in the process of removing the job
      document.getElementById("text").innerHTML = document
        .getElementById("text")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      // deleting done. Set next job, and repeat with typing by
      // setting reverse to false
      jobIdx = (jobIdx+1) % 2;
      reverse = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    // We're adding text
    if (i === (textBase + jobs[jobIdx]).length) {
      // Line is done. Wait and then reverse
      i = textBase.length;
      reverse = true;

      // Wait a second, then start deleting
      setTimeout(typeWriter, 3000);
    } else {
      // Write text like a typewriter
      if (i < (textBase + jobs[jobIdx]).length) {
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + (
          textBase + jobs[jobIdx]
        ).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}

typeWriter();
