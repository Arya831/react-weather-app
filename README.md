# ☀️ React Weather Application

## Overview

This is a clean, single-page application (SPA) built using **React** that allows users to check the current weather conditions for any city worldwide. The project demonstrates proficiency in front-end development, API integration, and modern deployment practices.

## 🚀 Live Demo

You can view the fully deployed and working application here:

**[Click here to open the Live Weather App](https://react-weather-app-eta-sand.vercel.app)**

---

## 🛠️ Technology Stack

* **Frontend Framework:** React (using Vite for the build tool)
* **Styling:** HTML5 and CSS3
* **Data Source:** OpenWeatherMap API
* **Deployment:** Vercel

---

## ✨ Features

* **Real-time Data:** Fetches up-to-the-minute weather information.
* **Search Functionality:** Allows users to easily search for any city.
* **Responsive Design:** Works smoothly on desktop, tablet, and mobile devices.

---

## 💻 Running Locally (For Developers)

If you or a reviewer wants to clone the project and run it on a local machine, follow these simple steps.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourUsername/your-repo-name.git](https://github.com/YourUsername/your-repo-name.git)
    cd your-repo-name
    ```
    *(Note: Replace `YourUsername/your-repo-name` with your actual GitHub path.)*

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will now be running on `http://localhost:5173` (or similar port).

---

## 🔑 API Key Setup

This app requires an API key from OpenWeatherMap to fetch data.

1.  Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).
2.  Create a file named **`.env.local`** in the root of the project directory.
3.  Add your API key to the file in this format:
    ```
    VITE_WEATHER_API_KEY=YOUR_ACTUAL_API_KEY_GOES_HERE
    ```

*(Commit the code after adding the README, but **never commit your API key** or the `.env.local` file itself!)*
