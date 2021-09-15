<script>
function craigDavidTodo() {
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday - Chill with girl";
  weekday[1] = "Monday - Meet this girl";
  weekday[2] = "Tuesday - Take her for a drink";
  weekday[3] = "Wednesday - Make love with girl";
  weekday[4] = "Thursday - Make love with girl";
  weekday[5] = "Friday - Make love with girl";
  weekday[6] = "Saturday - Make love with girl";

  let n = weekday[d.getDay()];
  document.getElementById("todo").innerHTML =  n + " ✅";
}
</script>
