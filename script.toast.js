function toast({ title = "", msg = "", type = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    const autoRemoveId = setTimeout(function(){
      main.removeChild(toast);
    },duration)

    toast.onclick = function(e){
    if(e.target.closest(".toast__close")){
      main.removeChild(toast);
      clearTimeout(autoRemoveId);
    }
    }
    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-circle-exclamation",
    };

    toast.classList.add("toast");
    toast.style.animation = `slideInLeft ease .4s, fadeOut linear .6s 2s forwards` ;

    toast.innerHTML = `
      <div class="toast__status toast--${type}">
        <i class="${icons[type]}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">
          ${msg}
        </p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    main.appendChild(toast);
   
   
  }
}

function handleToastSuccess() {
  toast({
    title: "Yay! Everything worked!",
    msg: "Congrats on the internet loading your request.",
    type: "success",
    duration: 4000,
  });
}

function handleToastInfo() {
  toast({
    title: "Did you know?",
    msg: "Here is something that you might like to know.",
    type: "info",
    duration: 4000,
  });
}

function handleToastWarning() {
  toast({
    title: "Uh oh, something went wrong",
    msg: "Sorry! There was a problem with your request.",
    type: "warning",
    duration: 4000,
  });
}
