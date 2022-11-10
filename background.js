tabs = chrome.tabs.query(
  { active: true, currentWindow: true },
  function (tabs) {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (tab.url.startsWith("https://www.youtube.com/shorts/")) {
        chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          files: ["script.js"],
        });
      }
    });
  }
);
