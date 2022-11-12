function setting_button(id) {
  const button = document.getElementById(id);
  chrome.storage.local.get(id, function (result) {
    if (result[id] === true) {
      button.checked = true;
    }
  });
  button.addEventListener("click", function () {
    chrome.storage.local.set({ [id]: button.checked });
  });
}
setting_button("autoSwitchSpeed");
