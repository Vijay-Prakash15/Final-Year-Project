# Hearing Impairment Assistant  
## Automatic Indian Sign Language Translator (Audio/Text to ISL Gesture Conversion)

A modern web-based assistive system that converts user speech or text into Indian Sign Language (ISL) gestures using preloaded GIFs and alphabet images. This project is designed to support hearing-impaired users by improving day-to-day communication.

---

## Features

- Convert **text input** into ISL gestures  
- Basic support for **voice/audio input**  
- Uses **preloaded ISL GIFs** for common words  
- Fallback to **letter-by-letter gesture images** if full word GIF is unavailable  
- Simple and user-friendly interface  
- Fast Flask backend processing  

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask

### Assets
- Preloaded ISL GIFs
- Alphabet gesture images

---

## Project Workflow

1. User enters text or voice input  
2. Frontend sends request to Flask backend  
3. Backend checks dictionary for full word GIF  
4. If available → displays word GIF  
5. If not available → splits into letters  
6. Maps letters to corresponding gesture images  
7. Sends response back to frontend  
8. Frontend renders gestures sequentially  

---

## Project Structure

```bash
Automatic-Indian-Sign-Language-Translator/
│
├── static/
│   ├── gifs/              # ISL word GIFs
│   ├── letters/           # Alphabet images
│   ├── css/
│   └── js/
│
├── templates/
│   ├── index.html
│   └── output.html
│
├── app.py
├── requirements.txt
└── README.md



Installation
Clone Repository
git clone https://github.com/Vijay-Prakash15/Final-Year-Project.git
cd Final-Year-Project
Install Dependencies
pip install -r requirements.txt
Run Project
python app.py
Open in Browser
http://127.0.0.1:5000/
Use Case

This project helps:

Hearing-impaired individuals
Students learning ISL
Assistive communication systems
Future Improvements
Real-time speech recognition
AI-based sign avatar generation
Hindi language support
Mobile application integration
Screenshots
System Workflow

(Add your workflow image here)

UI Demo

(Add project screenshots here)

Contributors
Vijay Prakash Gupta
License

This project is developed for educational and research purposes.
