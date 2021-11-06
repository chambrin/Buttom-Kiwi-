function JumpKiwi() {
  document.querySelector(".kiwi").className = "kiwi";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".kiwi").className = "changing";
    });
  });
}