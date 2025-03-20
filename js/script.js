const yearFooter = function () {
  const date = document.getElementById("year");
  date.innerText = new Date().getFullYear();
};

yearFooter();
