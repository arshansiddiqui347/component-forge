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
            // Replace YOUR_API_KEY with your secret key
const OPENAI_API_KEY = "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";

async function generateCodeFromDescription(description) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Generate HTML/CSS code for this UI component: ${description}`,
            max_tokens: 500,
            temperature: 0.5
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

// Generate button functionality
document.getElementById('generateBtn').addEventListener('click', async () => {
    const description = document.getElementById('uiDescription').value;
    const preview = document.getElementById('generatedPreview');
    const codeBox = document.getElementById('generatedCode');

    if (!description) {
        alert('Please describe the UI component first!');
        return;
    }

    codeBox.textContent = 'Generating...';

    try {
        const generatedCode = await generateCodeFromDescription(description);
        codeBox.textContent = generatedCode;
        preview.innerHTML = generatedCode;
    } catch (err) {
        console.error(err);
        alert('Error generating code. Try again.');
        codeBox.textContent = '';
    }
});


        });
    });
});
