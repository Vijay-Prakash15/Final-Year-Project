# 🤟 Indian Sign Language Translator
### Bridging Communication Gaps Through Technology

<div align="center">

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8%2B-blueviolet.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey.svg)](https://flask.palletsprojects.com/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()

**Transform Text & Speech into Indian Sign Language Gestures Instantly**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Demo](#-demo) • [Contributing](#-contributing)

</div>

---

## 🎯 About

An intelligent, web-based **assistive communication system** that converts text and speech input into Indian Sign Language (ISL) gestures. Designed to empower hearing-impaired individuals, support ISL learners, and create more inclusive digital environments.

> **Making communication accessible to everyone** 🌍

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 **Text Input** | Convert any typed text into ISL gestures |
| 🎤 **Voice Input** | Speak naturally—we'll convert your speech to ISL |
| 🎬 **Visual Gestures** | High-quality GIFs for common ISL words |
| 🔤 **Alphabet Mapping** | Letter-by-letter gesture fallback for any word |
| ⚡ **Real-time Processing** | Instant conversion without delays |
| 🎨 **User-Friendly UI** | Simple, intuitive interface for all ages |
| 📱 **Responsive Design** | Works seamlessly on desktop and mobile |

---

## 🛠️ Tech Stack

<div align="center">

**Frontend** | **Backend** | **Assets**
---|---|---
HTML5 | Python 3.8+ | ISL GIFs
CSS3 | Flask 2.0+ | Alphabet Images
JavaScript (ES6+) | | 

</div>

---

## 📂 Project Structure

```
Automatic-Indian-Sign-Language-Translator/
│
├── 📁 static/
│   ├── 🎬 gifs/              # Pre-loaded ISL word GIFs
│   ├── 🔤 letters/           # Gesture alphabet images
│   ├── 🎨 css/
│   │   └── style.css
│   └── ⚙️ js/
│       └── script.js
│
├── 📁 templates/
│   ├── index.html            # Main interface
│   └── output.html           # Gesture display
│
├── 🐍 app.py                 # Flask backend
├── 📋 requirements.txt       # Python dependencies
├── 📖 README.md
└── LICENSE
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

**1. Clone the Repository**
```bash
git clone https://github.com/Vijay-Prakash15/Final-Year-Project.git
cd Final-Year-Project
```

**2. Install Dependencies**
```bash
pip install -r requirements.txt
```

**3. Start the Flask Server**
```bash
python app.py
```

**4. Open in Browser**
```
http://localhost:5000
```

---

## 💡 How It Works

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  User Input                                             │
│  ├─ Text via Keyboard                                  │
│  └─ Speech via Microphone                              │
│           ↓                                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Frontend Processing                                    │
│  └─ Validate input & send to backend                   │
│           ↓                                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Backend Analysis (Flask)                              │
│  ├─ Check dictionary for full-word GIF                 │
│  ├─ If Found → Return word gesture                     │
│  └─ If Not → Split into letters & map gestures        │
│           ↓                                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Frontend Rendering                                    │
│  └─ Display ISL gestures sequentially                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📖 Usage Guide

### Text to ISL Conversion

1. **Launch** the application at `http://localhost:5000`
2. **Type** your message in the input field
3. **Click** "Convert to ISL" or press Enter
4. **View** the gesture sequence displayed on screen
5. **Repeat** as needed for different phrases

### Voice to ISL Conversion

1. **Click** the microphone icon 🎤
2. **Speak** clearly into your device
3. **Wait** for speech recognition to complete
4. **Watch** gestures appear automatically

### Example

```
Input:  "Hello world"
Output: [GIF: Hello] → [GIF: world]

Input:  "xyz" (uncommon word)
Output: [IMG: X] → [IMG: Y] → [IMG: Z]
```

---

## 🎓 Use Cases

✅ **For Hearing-Impaired Individuals**
- Daily communication assistance
- Technology accessibility
- Social interaction support

✅ **For ISL Learners**
- Interactive learning tool
- Visual reference guide
- Practice material

✅ **For Organizations**
- Inclusive communication systems
- Accessible customer support
- Educational institutions

---

## 🔮 Future Enhancements

- [ ] 🤖 **AI Avatar** - Animated sign language avatar instead of static GIFs
- [ ] 🗣️ **Real-time Speech Recognition** - Advanced speech-to-text with better accuracy
- [ ] 🇮🇳 **Hindi Language Support** - Native Hindi input conversion
- [ ] 📱 **Mobile App** - Native iOS/Android applications
- [ ] 🔄 **Reverse ISL Translation** - Convert gestures back to text
- [ ] 🌐 **Multi-Language Support** - Expand to other regional sign languages
- [ ] 💾 **Offline Mode** - Work without internet connectivity
- [ ] ♿ **Extended Accessibility** - Enhanced features for various disabilities

---

## 📦 Dependencies

```txt
Flask==2.0.0
Werkzeug==2.0.0
SpeechRecognition==3.8.1
```

**Install all dependencies:**
```bash
pip install -r requirements.txt
```

---

## 🎬 Demo & Screenshots

### Main Interface
*Screenshot of the input interface with text and voice input options*

### Gesture Output
*Screenshot showing ISL gestures rendered for a sample phrase*

*[Add actual screenshots here]*

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### Steps to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ways to Contribute
- 🐛 Report bugs and issues
- 🎨 Improve UI/UX design
- 📚 Enhance documentation
- ➕ Add new ISL words/gestures
- 🔧 Optimize backend performance
- 🌐 Add language support

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a suggestion? 
**[Open an Issue](https://github.com/Vijay-Prakash15/Final-Year-Project/issues)**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Vijay Prakash Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## 👨‍💻 Author

**Vijay Prakash Gupta**
- GitHub: [@Vijay-Prakash15](https://github.com/Vijay-Prakash15)
- LinkedIn: [Add Your Profile]
- Email: [Add Your Email]

---

## 🙏 Acknowledgments

- Indian Sign Language (ISL) Dictionary Resources
- Open-source community for valuable libraries
- Contributors and testers
- Feedback from hearing-impaired community members

---

## 📞 Support & Contact

Have questions or need help?

- 📧 **Email**: [vijaypr82701@gmail.com]
- 💬 **Issues**: [GitHub Issues](https://github.com/Vijay-Prakash15/Final-Year-Project/issues)
- 🤝 **Discussions**: [GitHub Discussions](https://github.com/Vijay-Prakash15/Final-Year-Project/discussions)

---

## 📊 Project Stats

<div align="center">

![Python](https://img.shields.io/badge/Made%20with-Python-blue)
![Flask](https://img.shields.io/badge/Framework-Flask-lightgrey)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)
![Educational](https://img.shields.io/badge/Purpose-Educational-yellow)

</div>

---

<div align="center">

### ⭐ If you find this project helpful, please consider giving it a star!

[⬆ back to top](#-indian-sign-language-translator)

</div>
