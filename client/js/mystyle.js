$(document).ready(function () {
  $("#example").dataTable({
    aLengthMenu: [
      [10, 25, 50, 100, -1],
      [10, 25, 50, 100, "All"],
    ],
    iDisplayLength: 10,
  });
});
