<img width="425" height="320" alt="Screenshot 2026-02-08 200432" src="https://github.com/user-attachments/assets/efe8fc31-ddba-495d-969a-d80f70cf36b7" />

<img width="515" height="429" alt="Screenshot 2026-02-08 200539" src="https://github.com/user-attachments/assets/df234be7-752d-411d-98d1-9073a1f8184b" />




# 🛂 Aadhar-Based Identity and Age Verification App

This application verifies user identity by:
1. Extracting the user's Date of Birth (DOB) from an uploaded Aadhar card using OCR (Tesseract)
2. Capturing a live selfie via webcam
3. Detecting and comparing faces between Aadhar and selfie images using FaceNet (facenet-pytorch)
4. Providing real-time feedback on image clarity and lighting
5. Checking if the user is 18 years or older

## ✅ Features

* 📷 Webcam Selfie Capture
* 🧠 Face Detection + Matching (via PyTorch MTCNN + FaceNet)
* 🔍 DOB Extraction using Tesseract OCR
* ⚠️ Warnings for blurry or dark selfies
* 🎨 Available in both Streamlit and React versions

## 🧠 How It Works

* Users upload an image of their Aadhar card
* Users take a live selfie
* The system:
   * Extracts DOB from Aadhar
   * Verifies age (>=18)
   * Detects and compares faces
   * Shows face match confidence

igured properly in `backend/app.py`
