chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if url match regex https:\/\/\b(m|www)\b\.youtube\.com\/shorts\/.{11}
  if (tab.url.match(/https:\/\/\b(m|www)\b\.youtube\.com\/shorts\/.{11}/)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: true },
      files: ["script.js"],
    });
    chrome.storage.local.get("autoSwitchSpeed", function (result) {
      if (result["autoSwitchSpeed"] === true) {
        chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          files: ["autoswitchspeed.js"],
        });
      }
    });
  }
});
