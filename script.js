document.addEventListener("DOMContentLoaded", function () {
  let counterElement = document.getElementById("counter");
  let count = 0;
  let interval = setInterval(() => {
      if (count <= 100) {
          counterElement.innerText = count;
      } else {
          counterElement.innerText = "100 лвл";
          counterElement.style.fontSize = "100px"; 
          clearInterval(interval); 
      }
      count++;
  }, 20);
});
