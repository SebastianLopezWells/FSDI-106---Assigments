var regularIcon = "fa-regular fa-star";
var solidIcon = "fa-solid fa-star";
var isImportantIcon = false;
var hiddenForm = false;
function toggleImportant() {
  if (!isImportantIcon) {
    $("#Important").removeClass(regularIcon);
    $("#Important").addClass(solidIcon);
    isImportantIcon = true;
  } else {
    $("#Important").removeClass(solidIcon);
    $("#Important").addClass(regularIcon);
    isImportantIcon = false;
  }
}
function hideForm() {
  console.log("Hide Form");

  if (!hiddenForm) {
    hiddenForm = true;
    console.log(hiddenForm);
    $(".form-container").hide();
  } else {
    hiddenForm = false;
    console.log(hiddenForm);
    $(".form-container").show();
  }
}
function saveInfo() {
  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let dueDate = $("#txtDueDate").val();
  let color = $("#txtColor").val();
  let emoji = $("#txtEmoji").val();
  let location = $("#txtLocation").val();
  let status = $("#txtStatus").val();
  let notification = $("#notification").val();

  let task = new Task(
    isImportantIcon,
    title,
    description,
    dueDate,
    color,
    emoji,
    location,
    status,
    notification
  );
  console.log(task);
  displayTask(task);
}
function displayTask(task) {
  let card = `
  <div class="card">
    <div class="card-title">
      <h3>Title: ${task.title}</h3>
    </div>
    <div class="card-description">
      <p>Description: ${task.description}</p>
    </div>
    <div class="card-important">
      <p>Due Date: ${task.dueDate}</p>
      <p>color: ${task.color}</p>
      <p>Emoji: ${task.emoji}</p> 
    </div>
    <div class="card-status">
    <p>Location: ${task.location}</p>
    <p>Status: ${task.status}</p>
    <p>Notification: ${task.notification.toUpperCase()}</p>
    </div>
  </div >
  `;
  $("#Cards").append(card);
}
function init() {
  console.log("Task Mangeer Page");

  $("#Important").click(toggleImportant);

  $("#btnSave").click(saveInfo);

  $("#hideBTN").click(hideForm);
}
window.onload = init;
