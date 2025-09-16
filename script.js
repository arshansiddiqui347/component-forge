// Copy to clipboard functionality
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Show copied feedback
    const copyBtn = event.target;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
            // Existing copyCode and smooth scroll functions stay here

// Code-to-Design functionality
document.getElementById('generateBtn').addEventListener('click', () => {
    const fileInput = document.getElementById('imageUpload');
    const preview = document.getElementById('generatedPreview');
    const codeBox = document.getElementById('generatedCode');

    if (fileInput.files.length === 0) {
        alert('Please upload an image first!');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgData = e.target.result;

        // Display the uploaded image in preview (simulated)
        preview.innerHTML = `<img src="${imgData}" alt="Uploaded UI" style="max-width:100%; border: 2px dashed #fff;">`;

        // Simulated generated code
        const generatedHTML = `
<!-- Generated Code for uploaded UI -->
<div class="generated-component">
    <img src="${imgData}" alt="Component" style="max-width:100%;">
</div>
        `.trim();

        codeBox.textContent = generatedHTML;
    }

    reader.readAsDataURL(file);
});

        });
    });
});
