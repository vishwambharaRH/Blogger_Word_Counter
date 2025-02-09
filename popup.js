document.addEventListener("DOMContentLoaded", () => {
    // Load the latest word count from storage
    chrome.storage.local.get("wordCount", (data) => {
        document.getElementById("wordCount").textContent = data.wordCount || "0";
    });
});

// Listen for real-time updates
chrome.runtime.onMessage.addListener((message) => {
    if (message.wordCount !== undefined) {
        document.getElementById("wordCount").textContent = message.wordCount;
    }
});