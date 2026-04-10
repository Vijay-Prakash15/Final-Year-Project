from flask import Flask, render_template, request, jsonify
import os
import string

app = Flask(__name__)

# Preloaded mappings
gif_map = {}
letter_map = {}

def preload_assets():
    """
    Scans the static directories for available assets and loads them into memory maps.
    This avoids filesystem scanning on every request and ensures we only use existing local assets.
    """
    # Load Word Gifs
    gif_dir = os.path.join(app.static_folder, 'ISL_Gifs')
    if os.path.exists(gif_dir):
        for filename in os.listdir(gif_dir):
            if filename.lower().endswith('.gif'):
                # Assume word is filename perfectly matching (e.g., hello.gif -> hello)
                word = os.path.splitext(filename)[0].lower()
                gif_map[word] = f"/static/ISL_Gifs/{filename}"
                print(f"Loaded GIF for: {word}")
                
    # Load Letters
    letter_dir = os.path.join(app.static_folder, 'letters')
    if os.path.exists(letter_dir):
        for filename in os.listdir(letter_dir):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                letter = os.path.splitext(filename)[0].lower()
                letter_map[letter] = f"/static/letters/{filename}"
                print(f"Loaded Letter for: {letter}")

# Execute preloading at startup
preload_assets()

@app.route('/')
def home():
    """ Renders the main landing user interface. """
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    """
    Accepts JSON body: { "text": "my sentence to translate" }
    Returns mapping of each word to its corresponding assets.
    """
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
        
    raw_text = data['text']
    
    # 1. Convert text to lowercase
    text = raw_text.lower()
    
    # 2. Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))
    
    # 3. Split into words
    words = text.split()
    
    results = []
    
    for word in words:
        if word in gif_map:
            # Full word GIF exists
            results.append({
                "word": word,
                "type": "gif",
                "assets": [gif_map[word]]
            })
        else:
            # Fallback: split word into letters
            letters = []
            for char in word:
                if char in letter_map:
                    letters.append(letter_map[char])
            
            # Map word to individual letter images; gracefully handles missing letters by omitting them.
            results.append({
                "word": word,
                "type": "letters",
                "assets": letters
            })
            
    return jsonify({
        "original_text": raw_text,
        "results": results
    })

if __name__ == '__main__':
    print("Starting Hearing Impairment Assistant Flask application...")
    print(f"Loaded {len(gif_map)} Word GIFs and {len(letter_map)} Letter images.")
    # Run the Flask app on local port 5000
    app.run(debug=True, port=5000)
