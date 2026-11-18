function startVoice() {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        
        document.getElementById('searchInput').value = event.results[0][0].transcript;
    };

    recognition.onerror = function(event) {
        alert("Voice recognition failed. Try again.");
    };

    recognition.start();
}
function search(){
    let query = document.getElementById('searchInput').value;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
}