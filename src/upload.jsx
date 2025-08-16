import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

export default function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        setErrorMsg("⚠ Please upload a valid image file.");
        setPreview(null);
        setFile(null);
        return;
      }
      setErrorMsg("");
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  // Simulate upload progress
  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return;
    setProgress(0);
    setLoading(false);

    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width += 10;
        setProgress(width);
      }
    }, 200);
  };

  // Simulate analyze
  const handleAnalyze = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/result");
    }, 1500);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Space Debris Detector</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/result">Results</Link>
        </div>
      </div>

      {/* Upload Section */}
      <div className="upload-container">
        <h1>Upload Image</h1>
        <p>Upload Your Satellite Image</p>

        {/* Preview Image */}
        {preview && (
          <div className="preview-box">
            <img src={preview} alt="Preview" />
          </div>
        )}

        {/* Error Message */}
        {errorMsg && <div className="error-msg">{errorMsg}</div>}

        {/* Upload Button */}
        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleFileChange}
          />
          <button type="submit" className="btn upload-btn">
            Upload Image
          </button>
        </form>

        {/* Analyze Button */}
        <form onSubmit={handleAnalyze}>
          <button type="submit" className="btn analyze-btn">
            Analyze Image
          </button>
        </form>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        {/* Loading */}
        {loading && <div className="loading-text">Processing...</div>}
      </div>
    </div>
  );
}





