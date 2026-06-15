const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

const usersData = [
  {
    id: 1,
    name: "Alex Mercer",
    email: "alex.mercer@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
    dob: "1993-07-12",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    dob: "1995-11-28",
  },
  {
    id: 3,
    name: "Marcus Chen",
    email: "marcus.chen@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    dob: "1989-04-03",
  },
  {
    id: 4,
    name: "Elena Rostova",
    email: "elena.r@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    dob: "2000-01-15",
  },
  {
    id: 5,
    name: "David Amadi",
    email: "d.amadi@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    dob: "1997-09-22",
  },
];

const ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem) => {
    users.innerHTML += `<div class="user_card">
      <div class="img_box">
        <img src="${elem.imageUrl}" alt="image">
      </div>
      <div class="text">
        <h3>Name - ${elem.name}</h3>
        <p>Email - ${elem.email}</p>
      </div>
    </div>`;
  });
};

ui();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inp1.value;
  let email = inp2.value;
  let imageUrl = url.value;

  if (name.trim() === "" && email.trim() === "" && imageUrl.trim() === "") return;

  usersData.push({
    id: usersData.length + 1,
    name,
    email,
    imageUrl,
    dob: "1993-07-12",
  });

  ui();
  // inp1.value = "";
  // inp2.value = "";
  // url.value = "";
  form.reset();
});
