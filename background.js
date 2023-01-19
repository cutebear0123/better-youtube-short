function task(name, tabId) {
  chrome.storage.local.get(name, function (result) {
    if (result[name] === true) {
      chrome.scripting.executeScript({
        target: { tabId: tabId, allFrames: true },
        files: [`${name}.js`],
      });
    }
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if url match regex https:\/\/\b(m|www)\b\.youtube\.com\/shorts\/.{11}
  if (tab.url.match(/https:\/\/\b(m|www)\b\.youtube\.com\/shorts\/.{11}/)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: true },
      files: ["script.js"],
    });
    task("autoSwitchSpeed", tabId);
    task("noloop", tabId);
  }
});
