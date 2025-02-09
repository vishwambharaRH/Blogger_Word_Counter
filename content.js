function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #blogger-word-counter {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            font-family: 'Arial', sans-serif;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);
}

function injectWordCounter() {
    // Create a div element for the word counter
    const wordCounter = document.createElement('div');
    wordCounter.id = 'blogger-word-counter';
    wordCounter.textContent = 'Word Count: 0';

    // Append the word counter to the body
    document.body.appendChild(wordCounter);
}

function updateWordCounter(wordCount) {
    // Update the word counter element
    const wordCounter = document.getElementById('blogger-word-counter');
    if (wordCounter) {
        wordCounter.textContent = `Word Count: ${wordCount}`;
    }
}

function getEditorContent() {
    // Use the class to find the editor iframe
    const editorIframe = document.querySelector('iframe.ZW3ZFc.editable');
    if (!editorIframe) {
        console.log("Editor iframe not found.");
        return;
    }

    try {
        // Access the iframe's document
        const editorBody = editorIframe.contentDocument?.body;
        if (!editorBody) {
            console.log("Editor body not found.");
            return;
        }

        // Extract the text content from the editor body
        const text = editorBody.innerText.trim(); // Extract and trim the text

        // Calculate the word count
        const wordCount = text ? text.split(/\s+/).length : 0;

        // Update the word counter
        updateWordCounter(wordCount);
    } catch (error) {
        console.error("Failed to access iframe:", error);
    }
}

// Inject the styles and word counter into the page
injectStyles();
injectWordCounter();

// Start checking for the editor
setInterval(getEditorContent, 1000);