# EXAMGUARD – Intelligent Examination Security & Monitoring System

EXAMGUARD is an enterprise-grade, intelligent examination security platform designed to safeguard academic integrity across schools, universities, and national examination bodies.

---

## 🚀 Technology Stack
* **Frontend Framework**: React 18 + TypeScript + Vite
* **Styling & UI**: Tailwind CSS (Dark Navy Security Operations Theme)
* **Icons**: Lucide React
* **Data Visualization**: Recharts (RF Spectrum & Threat Analytics)
* **Backend & Storage**: Supabase (PostgreSQL, Auth, RLS, Storage)
* **Progressive Web App (PWA)**: Offline-first data queueing for low-connectivity halls.

---

## 📦 Local Installation & Setup

1. **Extract ZIP & Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🛠️ GitHub & Vercel Deployment Instructions

### GitHub Upload:
```bash
git init
git add .
git commit -m "Initial EXAMGUARD v1.0 release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/examguard-platform.git
git push -u origin main
```

### Vercel Deployment:
1. Connect your GitHub repository to **Vercel**.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 🔌 Physical Hardware Integration Notice

| Feature | Operational Status | Hardware Required for Physical Deployment |
| :--- | :--- | :--- |
| **RF Signal Intercept** | Interactive / Simulated Data | ESP32 Wi-Fi/BT Sniffer, SDR Receiver (HackRF One) |
| **Live CCTV Monitoring** | Simulated RTSP Stream | RTSP IP Camera Network |
| **Environmental Telemetry** | Active Dashboard Telemetry | DHT22 / BME280 Sensors via ESP32 |
| **Biometric Verification** | System Logged | Optical/Capacitive Fingerprint Scanner |

---
© 2026 EXAMGUARD Security Systems. All Rights Reserved.
