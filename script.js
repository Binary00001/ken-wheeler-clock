const secondsHand = document.querySelector(".secs");
const minsHand = document.querySelector(".mins");
const hoursHand = document.querySelector(".hours");

const setTime = () => {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDeg = seconds * 6;
  const minutesDeg = minutes * 6;
  const hourDeg = 0.5 * (hours * 60 + minutes);

  secondsHand.setAttribute("style", `transform: rotate(${secondsDeg}deg)`);
  minsHand.setAttribute("style", `transform: rotate(${minutesDeg}deg)`);
  hoursHand.setAttribute("style", `transform: rotate(${hourDeg}deg)`);
};

setInterval(setTime, 1000);
