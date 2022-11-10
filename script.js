function add_time(number) {
  if (document.getElementsByTagName("video")[0].currentTime + number < 0) {
    document.getElementsByTagName("video")[0].currentTime = 0;
  } else {
    document.getElementsByTagName("video")[0].currentTime += number;
  }
  console.log(document.getElementsByTagName("video")[0].currentTime);
}

document.onkeydown = function (e) {
  if (e.key == "ArrowLeft") {
    add_time(-5);
  } else if (e.key == "ArrowRight") {
    add_time(5);
  }
};
