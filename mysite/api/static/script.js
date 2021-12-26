let submitBtn = document.getElementsByClassName("fa-heart");
let deleteBtn = document.getElementsByClassName("fa-trash");
let dd = document.getElementsByClassName("event-des");
let eventName = document.querySelector("#name");
let eventDesc = document.querySelector("#data");
let eventImageLink = document.querySelector("#imagesrc");
let eventDateTime = document.querySelector("#date");
let eventLocation = document.querySelector("#location");
let addBtn = document.querySelector("#add_event");

if (addBtn) {
  addBtn.addEventListener("click", l_handleSubmit);
}

async function handleSubmit(e) {
  const t = e.path[1].childNodes[1].getAttribute("value");
  const tt =
    e.path[1].parentElement.parentElement.childNodes[1].childNodes[3]
      .childNodes[7].textContent;
  data = {
    id: t,
    is_liked: tt === "True" ? 0 : 1,
  };
  await fetch("http://127.0.0.1:8000", {
    method: "PUT",
    body: JSON.stringify(data),
  }).then(function (res) {
    window.location.replace("http://127.0.0.1:8000");
  });
}

async function l_handleSubmit(e) {
  Data = {
    event_name: eventName.value,
    data: eventDesc.value,
    time: eventDateTime.value,
    location: eventLocation.value,
    is_liked: false,
    image: eventImageLink.value,
  };
  await fetch("http://localhost:8000/add_event", {
    method: "POST",
    body: JSON.stringify(Data),
  }).then(function (res) {
    if (res.status === 200) {
      window.location.replace("http://127.0.0.1:8000");
    } else alert("Kindly check entered values");
  });
}

for (var i = 0; i < submitBtn.length; i++) {
  submitBtn[i].addEventListener("click", handleSubmit);
}
async function deleteSubmit(e) {
  const t = e.path[1].childNodes[1].getAttribute("value");
  data = {
    id: t,
  };
  await fetch("http://127.0.0.1:8000", {
    method: "DELETE",
    body: JSON.stringify(data),
  }).then(function (res) {
    window.location.replace("http://127.0.0.1:8000");
  });
}

for (var i = 0; i < submitBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteSubmit);
}
