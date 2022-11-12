function add_time(number) {
  for (const video of document.getElementsByTagName("video")) {
    if (video.currentTime + number < 0) {
      video.currentTime = 0;
    } else {
      video.currentTime += number;
    }
  }
}

document.onkeydown = function (e) {
  if (e.key == "ArrowLeft") {
    add_time(-5);
  } else if (e.key == "ArrowRight") {
    add_time(5);
  }
};
