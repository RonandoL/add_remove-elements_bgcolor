// removeClass() without an argument removes all classes from the selected element; if you'd like to just remove a specific class, you can pass it in as an argument (or pass in multiple classes separated by spaces).

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});



    // Don't do this.
//   $("button#green").click(function() {
//   $("body").css("background-color", "green");
// });
    // First, it's mixing our concerns. JavaScript is responsible for how the page behaves; CSS is responsible for how the page looks. Here, we've put something about how the page looks in our JavaScript. This makes it difficult for other programmers who might need to change this page in the future to know where to look for the appropriate code.
    // Second, you lose one of the biggest powers of CSS: the ability to create a class and re-use that style across elements and pages. Here, when we've put a style in our JavaScript, it can't be re-used. So, when you want to change the style of your page, stick to adding and removing classes.
