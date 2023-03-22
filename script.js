const progrStatus = document.querySelector(".loader__progress-status");
const lineBar = document.querySelector(".loader__progress-line");
const btnStart = document.querySelector(".loader__btn_type_start");
const btnStop = document.querySelector(".loader__btn_type_stop");

let isProgress = 0;
let idBar;

function loadProgress() {
  const runProgress = () => {
    if (isProgress >= 100) {
      clearInterval(idBar);
    } else {
      isProgress++;
      lineBar.style.width = `${isProgress}%`;
      progrStatus.textContent = `${isProgress}%`;
    }
  };

  idBar = setInterval(runProgress, 60);
}

const startProgress = () => {
  if (isProgress === 100) {
    isProgress = 0;
    loadProgress();
  } else {
    clearInterval(idBar);
    loadProgress();
  }
};

const stopProgress = () => {
  if (isProgress !== 0) {
    clearInterval(idBar);
  }
};

loadProgress();

btnStart.addEventListener("click", startProgress);
btnStop.addEventListener("click", stopProgress);
