chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.wordCount !== undefined) {
        chrome.storage.local.set({ wordCount: message.wordCount });
    }
});