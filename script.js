// ===============================
// 📋 Copy to clipboard
// ===============================
function copyCode(elementId, event) {
    const codeElement = document.getElementById(elementId);
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Feedback
    const copyBtn = event.target;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

// ===============================
// 🌀 Smooth scrolling
// ===============================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===============================
// 🎨 Code-to-Design
// ===============================

// 1️⃣ Image Upload Simulation
document.getElementById('generateBtn').addEventListener('click', () => {
    const fileInput = document.getElementById('imageUpload');
    const preview = document.getElementById('generatedPreview');
    const codeBox = document.getElementById('generatedCode');

    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imgData = e.target.result;

            // Show uploaded image
            preview.innerHTML = `<img src="${imgData}" alt="Uploaded UI" style="max-width:100%; border: 2px dashed #fff;">`;

            // Show simulated code
            const generatedHTML = `
<!-- Generated Code for uploaded UI -->
<div class="generated-component">
    <img src="${imgData}" alt="Component" style="max-width:100%;">
</div>
            `.trim();

            codeBox.textContent = generatedHTML;
        };

        reader.readAsDataURL(file);
    }
});

// 2️⃣ OpenAI API (Description → Code)

// ⚠️ Put your key here (unsafe for GitHub Pages!)
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
            prompt: `Generate HTML + CSS code for this UI component: ${description}`,
            max_tokens: 500,
            temperature: 0.5
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

// Generate from description
document.getElementById('generateFromDescriptionBtn').addEventListener('click', async () => {
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
        alert('⚠️ Error generating code. Try again.');
        codeBox.textContent = '';
    }
});
