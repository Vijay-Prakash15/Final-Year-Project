document.addEventListener('DOMContentLoaded', () => {
    // UI Elements Variables
    const micBtn = document.getElementById('mic-btn');
    const textInput = document.getElementById('text-input');
    const convertBtn = document.getElementById('convert-btn');
    const resetBtn = document.getElementById('reset-btn');
    const statusText = document.getElementById('status-text');
    
    const outputSentence = document.getElementById('output-sentence');
    const outputCurrentWord = document.getElementById('output-current-word');
    const gestureDisplay = document.getElementById('gesture-display');

    let displaySequenceTimeouts = [];

    // --- Voice Input Module Integration ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-IN'; // Targets Indian English natively
        
        recognition.onstart = () => {
            micBtn.classList.add('listening');
            statusText.textContent = "Listening...";
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            textInput.value = transcript;
            statusText.textContent = "Voice captured. Ready to translate.";
        };
        
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            statusText.textContent = "Mic failed. Please use text input instead.";
            micBtn.classList.remove('listening');
        };
        
        recognition.onend = () => {
            micBtn.classList.remove('listening');
            if (statusText.textContent === "Listening...") {
                statusText.textContent = "Ready";
            }
        };
    } else {
        micBtn.style.display = 'none'; // Gracefully hide mic support for unsupported browsers
        statusText.textContent = "Speech recognition unsupported on this browser. Text input ready.";
    }

    micBtn.addEventListener('click', () => {
        if (recognition) {
            try {
                recognition.start();
            } catch (e) {
                console.error("Recognition already started or errored: ", e);
            }
        }
    });

    // --- Reset Input & Output ---
    resetBtn.addEventListener('click', () => {
        textInput.value = '';
        statusText.textContent = 'Ready';
        outputSentence.textContent = '';
        outputCurrentWord.textContent = '';
        gestureDisplay.innerHTML = '';
        clearSequence();
    });

    // --- Primary Conversion Logic ---
    convertBtn.addEventListener('click', async () => {
        const text = textInput.value.trim();
        if (!text) {
            statusText.textContent = "Please enter a sentence or use the mic.";
            return;
        }

        // Prepare UI for Translation Fetching
        clearSequence();
        statusText.textContent = "Checking word gestures...";
        gestureDisplay.innerHTML = '<div class="loader"></div>';
        outputSentence.textContent = `Translating: "${text}"`;
        outputCurrentWord.textContent = '';

        try {
            // Send payload to local Flask backend
            const response = await fetch('/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (!response.ok) {
                throw new Error("Translation backend returned an error status.");
            }

            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                playSequence(data.results);
            } else {
                statusText.textContent = "No translatable words found.";
                gestureDisplay.innerHTML = '<p style="color:var(--text-light);font-style:italic;">No result to display</p>';
            }

        } catch (error) {
            console.error(error);
            statusText.textContent = "An error occurred fetching the translation.";
            gestureDisplay.innerHTML = '';
        }
    });

    function clearSequence() {
        displaySequenceTimeouts.forEach(clearTimeout);
        displaySequenceTimeouts = [];
    }

    // --- Gesture Output Sequencer ---
    function playSequence(results) {
        let accumulatedDelay = 0;

        results.forEach((item, index) => {
            const timeoutId = setTimeout(() => {
                gestureDisplay.innerHTML = ''; // Start clean per word
                outputCurrentWord.textContent = item.word;
                
                if (item.type === 'gif') {
                    statusText.textContent = `Rendering complete word gesture for "${item.word}"`;
                    item.assets.forEach(assetSrc => {
                        const img = document.createElement('img');
                        img.src = assetSrc;
                        // Avoid caching behavior preventing GIF from re-playing from frame 0
                        img.src = assetSrc + '?t=' + new Date().getTime(); 
                        img.className = 'gesture-img';
                        gestureDisplay.appendChild(img);
                    });
                } else if (item.type === 'letters') {
                    statusText.textContent = `Using letter fallback for "${item.word}"`;
                    if (item.assets.length === 0) {
                        // All letters missing? Just skip showing gracefully
                        gestureDisplay.innerHTML = '<p style="color:var(--text-light);">(Word skipped gracefully)</p>';
                    } else {
                        item.assets.forEach(letterSrc => {
                            const img = document.createElement('img');
                            img.src = letterSrc;
                            img.className = 'letter-img';
                            gestureDisplay.appendChild(img);
                        });
                    }
                }
                
                // Show completion mark at end of execution
                if (index === results.length - 1) {
                    const finishTimeout = setTimeout(() => {
                         outputCurrentWord.textContent += ' ✓';
                         statusText.textContent = "Translation Complete";
                    }, calculateDelayForWord(item));
                    displaySequenceTimeouts.push(finishTimeout);
                }

            }, accumulatedDelay);
            
            displaySequenceTimeouts.push(timeoutId);
            accumulatedDelay += calculateDelayForWord(item);
        });
    }

    // Standardize time visible per word mapping type
    function calculateDelayForWord(item) {
        if (item.type === 'gif') {
            return 3200; // Let a word GIF loop/play for ~3.2 seconds
        } else {
            // Assign ~800ms per letter, ensuring it reads nicely. Provide bounds.
            return Math.max(2000, Math.min(4500, item.assets.length * 800));
        }
    }
});
