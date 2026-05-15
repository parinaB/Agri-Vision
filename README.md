# 🌱 Agri-Vision: Cotton Crop Analysis System

Agri-Vision is an AI-powered system that analyzes cotton crop images to determine growth stages and health conditions.  
It helps farmers and researchers make informed decisions about crop management and harvest timing.

---

## 📌 Overview

Agri-Vision uses deep learning and computer vision techniques to:
- Detect cotton growth phases  
- Identify crop health issues and diseases  
- Provide confidence scores and actionable recommendations  
- Offer both a web interface and a REST API  

---

## ✨ Features

- 🌿 **Growth Phase Detection** (4 stages)  
- 💚 **Health Assessment** (disease & damage detection)  
- 🤖 **AI-Powered Analysis** using deep learning  
- 🌐 **Web Interface** (Flask-based)  
- 📊 **JSON API** for programmatic access  
- 🎯 **Smart Recommendations** for farmers  
- 📈 **Fast Processing** (< 2 seconds per image)  

---

## 📁 Project Structure

```tree
agri-vision/
├── app.py              # Main Flask application
├── train.py           # Model training script
├── requirements.txt   # Dependencies
├── models/            # Trained models
├── static/            # CSS, images, uploads
├── templates/         # HTML templates
└── results/           # Analysis results
```

## 📊 Growth Phases Detected

- 🌱 **Vegetative / Budding** – Early growth stage  
- 🌸 **Flowering** – Flower development  
- 🍂 **Bursting (Ripped)** – Cotton bolls opening  
- ✅ **Harvest Ready** – Optimal harvest time  

---

## 🩺 Health Issues Identified

- ✅ **Healthy** – No issues detected  
- 🐛 **Pink Bollworm Damage** – Pest infestation  
- 🎨 **Discoloration** – Nutrient or water deficiency  
- ⚠️ **Other Damage** – Miscellaneous crop issues  

---

## 🛠️ API Usage

### Analyze Image (POST Request)

```bash
curl -X POST -F "file=@cotton_image.jpg" http://localhost:5000/api/analyze
```

## Response Format (JSON)

```bash
{
  "status": "success",
  "analysis": {
    "stage": "Bursting (Ripped)",
    "stage_confidence": 0.87,
    "health_status": "Pink Bollworm Damage",
    "health_confidence": 0.76,
    "health_score": 68.5,
    "is_ripped": true,
    "has_damage": true
  },
  "recommendations": ["..."]
}
```

## 🎯 How to Use

### 🌐 Web Interface

1. Go to `/analyze`  
2. Upload a cotton crop image  
3. View detailed results with confidence scores  
4. Download JSON report for records  

---

## 📈 Model Performance

- ✅ Accuracy: **~85–90%** on test data  
- ⚡ Processing Time: **< 2 seconds per image**  
- 🖼️ Supported Formats: JPG, PNG, JPEG  
- 📦 Max File Size: 10MB  

---

## 🚀 Future Enhancements

- 📱 Mobile application  
- 🎥 Real-time video analysis  
- 🌾 Multi-crop support  
- ☁️ Weather data integration  
- 📊 Yield prediction  
- 🧠 Improved AI models  

---

## 🤝 Contributing & Commit

Contributions are welcome to improve Agri-Vision and make it more useful for farmers and developers.

---

## 📜 License

This project is licensed under the MIT License.  
See the `LICENSE` file for more details.

---

## 🙌 Acknowledgements

- Open-source libraries: TensorFlow, Flask, OpenCV  
- Agricultural research datasets  
- Contributors and community support  

<div align="center">

**Made with ❤️ by the neeru24**

⭐ **Don't forget to star this repo if you found it helpful.** ⭐

</div>