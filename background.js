importScripts("verified.js");

loadVerifiedSites();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.status !== "complete") return;
  if (!tab.url) return;

  try {

    const url = new URL(tab.url);

    if (url.protocol !== "http:" && url.protocol !== "https:")
      return;

    const domain = url.hostname;

    if (isVerifiedDomain(domain)) {

      chrome.action.setIcon({
        tabId: tabId,
        path: {
          16: "icons/verified.png",
          32: "icons/verified.png",
          48: "icons/verified.png",
          128: "icons/verified.png"
        }
      });

    } else {

      chrome.action.setIcon({
        tabId: tabId,
        path: {
          16: "icons/default.png",
          32: "icons/default.png",
          48: "icons/default.png",
          128: "icons/default.png"
        }
      });

    }

  } catch (err) {
    console.error(err);
  }

});