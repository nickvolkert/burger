// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newEatState = $(this).data("newEatState");

    var newEatState = {
      "devoured": true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      //data: newEatState, dataType:"json",
      //contentType: "application/json"
    }).then(
      function() {
        console.log("Was whole now devoured", newEatState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // post dat burger!
  function postDaBurger(){
    var newBurger = {
      name: $("#burgerForm").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("A new tasty burger to DEVOUR");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    $("#burgerForm").val("");
  }

  $("#burgerBTN").on("click", function(e) {
    e.preventDefault();
    postDaBurger();
  });

  $("input#burgerForm").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      postDaBurger();
    }
  });
  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");
  //
  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
