const sidebar = document.querySelector(".sidebar");
const user = document.querySelector(".user");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header-wrapper i");
const webBtn = document.querySelector(".websiteBtn");

user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebar.classList.add("sidebar-wrapper-display");
});
xBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebar.classList.remove("sidebar-wrapper-display");
});
webBtn.addEventListener("click",()=> {
    
})
