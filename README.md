<img width="425" height="320" alt="Screenshot 2026-02-08 200432" src="https://github.com/user-attachments/assets/503acc17-8be2-45f5-b432-8ff5b545f69a" />
<img width="515" height="429" alt="Screenshot 2026-02-08 200539" src="https://github.com/user-attachments/assets/fc3597ed-60c1-4192-9520-11ed10d2c972" />

🛂 Aadhar-Based Identity and Age Verification App
This application verifies user identity by:

Extracting the user's Date of Birth (DOB) from an uploaded Aadhar card using OCR (Tesseract)
Capturing a live selfie via webcam
Detecting and comparing faces between Aadhar and selfie images using FaceNet (facenet-pytorch)
Providing real-time feedback on image clarity and lighting
Checking if the user is 18 years or older
✅ Features
📷 Webcam Selfie Capture
🧠 Face Detection + Matching (via PyTorch MTCNN + FaceNet)
🔍 DOB Extraction using Tesseract OCR
⚠️ Warnings for blurry or dark selfies
🎨 Available in both Streamlit and React versions
🧠 How It Works
Users upload an image of their Aadhar card
Users take a live selfie
The system:
Extracts DOB from Aadhar
Verifies age (>=18)
Detects and compares faces
Shows face match confidence
📦 Setup Instructions
✅ Prerequisites
Python 3.10+
Node.js 16+ (for React version)
Anaconda (recommended)
Tesseract OCR installed from here
After installing Tesseract, update the path in ocr.py if needed.



