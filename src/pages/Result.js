import { useLocation, Link } from "react-router-dom";
import "../Result.css";

function Result() {
  const location = useLocation();
  // const { bloodGroup, confidence } = location.state || {};
  // const { bloodGroup, confidence, logId, gradcamImage } = location.state || {};
  const { bloodGroup, confidence, logId, gradcamImage, isAdmin } = location.state || {};

  return (
    <>
    

      <div className="result-page">
        {/* Hero Section */}
        <section className="result-hero">
          <h1>Fingerprint Analysis Result</h1>
          <p>
            Your fingerprint has been successfully analyzed using AI-based
            pattern recognition.
          </p>
        </section>

        {/* Result Card */}
        <section className="result-card">
          <h2>Detected Blood Group</h2>

          <div className="blood-result">
            <span className="blood-group">
              {bloodGroup || "N/A"}
            </span>
            <span className="confidence">
              Prediction Confidence: <b>{confidence || "N/A"}</b>
            </span>
            {isAdmin && (
  <p className="log-id">
    <b>Log ID:</b> {logId}
  </p>
)}
           
          </div>

          <p className="result-note">
            This result is generated using fingerprint ridge pattern analysis
            and machine learning models. Accuracy may vary depending on image
            quality.
          </p>

          <div className="result-actions">
            <Link to="/scan" className="btn-outline">
              Scan Another Fingerprint
            </Link>

            <Link to="/" className="btn-solid">
              Go to Home
            </Link>
          </div>
        </section>
        {gradcamImage && (
  <div className="gradcam-container">
    <h3>Grad-CAM Visualization</h3>
    <img
      src={`data:image/png;base64,${gradcamImage}`}
      alt="GradCAM"
      style={{width:"300px", borderRadius:"10px"}}
    />
  </div>
)}

        {/* Info Section */}
        <section className="result-info">
          <h3>How This Works</h3>
          <p>
            Hemoprint analyzes unique fingerprint ridge patterns and maps them
            with learned blood group correlations using artificial intelligence.
            This technology aims to provide fast and contactless blood group
            detection.
          </p>
        </section>
        {!isAdmin && bloodGroup && (

<Link
to="/blood-info"
state={{ bloodGroup }}
className="btn-info"
>
🧬 Learn About Your Blood Group
</Link>

)}

        {/* Footer */}
         {/* FOOTER */}<footer className="main-footer">
  <div className="footer-container">

    <div className="footer-section">
      <h3>🩸 HemoPrint</h3>
      <p>
        AI-powered blood group detection using fingerprint analysis.
        Built with advanced Deep Learning & CNN models.
      </p>
    </div>

    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/user/login">User Login</a></li>
        <li><a href="/admin/login">Admin Login</a></li>
        <li><a href="/about">About Project</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@hemoprint.ai</p>
      <p>Phone: +91 98765 43210</p>
      <p>Location: India</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      ⚠️ This system is a research prototype. Not intended for clinical use.
    </p>
    <p>© 2026 HemoPrint | All Rights Reserved</p>
  </div>
</footer>
      </div>
    </>
  );
}

export default Result;
