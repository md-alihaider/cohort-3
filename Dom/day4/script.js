const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

// Track the index of the card being edited. -1 means we are adding a NEW card.
let editIndex = -1;

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
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="user_card">
      <div class="img_box">
        <img src="${elem.imageUrl}" alt="image">
      </div>
      <div class="text">
        <h3>Name - ${elem.name}</h3>
        <p>Email - ${elem.email}</p>
      </div>
      <div class="actions">
        <button onclick="editCard(${index})" id="edit">Edit</button>
        <button onclick="deleteCard(${index})" id="del">Delete</button>
      </div>
    </div>`;
  });
};

ui();

// Handle Form Submission (Both Add and Update)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inp1.value.trim();
  let email = inp2.value.trim();
  let imageUrl = url.value.trim();

  if (name === "" || email === "" || imageUrl === "") return;

  if (editIndex === -1) {
    // 1. ADD NEW CARD MODE
    usersData.push({
      id: Date.now(), // Safer unique ID than usersData.length + 1
      name,
      email,
      imageUrl,
      dob: "1993-07-12",
    });
  } else {
    // 2. UPDATE EXISTING CARD MODE
    usersData[editIndex].name = name;
    usersData[editIndex].email = email;
    usersData[editIndex].imageUrl = imageUrl;

    // Reset the edit index back to default mode
    editIndex = -1;
    form.querySelector("button[type='submit']").innerText = "Submit";
  }

  ui();
  form.reset();
});

// Delete Function
const deleteCard = (index) => {
  usersData.splice(index, 1);
  // If we delete the item currently being edited, reset the form state
  if (editIndex === index) {
    editIndex = -1;
    form.reset();
    form.querySelector("button[type='submit']").innerText = "Submit";
  }
  ui();
};

// Edit Function (Populates form with selected card's data)
const editCard = (index) => {
  editIndex = index; // Set global state to current index

  // Populate form fields
  inp1.value = usersData[index].name;
  inp2.value = usersData[index].email;
  url.value = usersData[index].imageUrl;

  // Optional UX touch: Change submit button text to "Update"
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) {
    submitBtn.innerText = "Update User";
  }
};
