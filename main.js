 function formatText() {
    // Get the input text
    var inputText = document.getElementById('inputText').value;

    // Split the text into lines
    var lines = inputText.split('\n');

    // Process each line to remove numbers and spaces
    var formattedText = lines.map(line => {
        // Remove leading numbers followed by a dot and space
        return line.replace(/^\d+[\.\-]\s*/, '');
    }).join('\n');

    // Output the formatted text
    document.getElementById('output').textContent = formattedText;
}

function copyText() {
    // Create a temporary textarea element
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = document.getElementById('output').textContent;

    // Append it to the body and select its content
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(tempTextarea);

    // Optionally, show an alert or message
    alert("Text copied to clipboard!");
}