import "./BloodGroups.css";

function BloodInfo() {
  return (
    <div className="blood-container">

      <h1 className="blood-title">Human Blood Group Information</h1>

      <section className="blood-section">
        <h2>What is Blood?</h2>
        <p>
          Blood is a vital fluid in the human body responsible for transporting
          oxygen, nutrients, hormones, and waste materials. It consists of red
          blood cells, white blood cells, platelets, and plasma.
        </p>
      </section>

      <section className="blood-section">
        <h2>Blood Group Systems</h2>
        <p>
          The most important blood group systems are the ABO system and the Rh
          factor system. These determine compatibility during blood transfusion.
        </p>
      </section>

      <section className="blood-section">
        <h2>ABO Blood Groups</h2>

        <table className="blood-table">
          <thead>
            <tr>
              <th>Blood Group</th>
              <th>Antigens</th>
              <th>Antibodies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>A antigen</td>
              <td>Anti-B</td>
            </tr>

            <tr>
              <td>B</td>
              <td>B antigen</td>
              <td>Anti-A</td>
            </tr>

            <tr>
              <td>AB</td>
              <td>A & B antigens</td>
              <td>None</td>
            </tr>

            <tr>
              <td>O</td>
              <td>No antigens</td>
              <td>Anti-A & Anti-B</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="blood-section">
        <h2>Rh Factor</h2>

        <p>
          Blood groups are also classified based on the presence or absence of
          the Rh factor protein.
        </p>

        <ul>
          <li>Rh Positive (Rh+)</li>
          <li>Rh Negative (Rh-)</li>
        </ul>

        <p>
          Example: A+, B-, AB+, O- etc.
        </p>
      </section>

      <section className="blood-section">
        <h2>Blood Donation Compatibility</h2>

        <table className="blood-table">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Can Donate To</th>
              <th>Can Receive From</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>O-</td>
              <td>All groups</td>
              <td>O-</td>
            </tr>

            <tr>
              <td>O+</td>
              <td>O+, A+, B+, AB+</td>
              <td>O+, O-</td>
            </tr>

            <tr>
              <td>A+</td>
              <td>A+, AB+</td>
              <td>A+, A-, O+, O-</td>
            </tr>

            <tr>
              <td>B+</td>
              <td>B+, AB+</td>
              <td>B+, B-, O+, O-</td>
            </tr>

            <tr>
              <td>AB+</td>
              <td>AB+</td>
              <td>All groups</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="blood-section">
        <h2>Importance of Blood Donation</h2>

        <p>
          Blood donation is essential for surgeries, accident victims, cancer
          treatments, and other medical conditions. One donation can save up to
          three lives.
        </p>
      </section>

      <section className="blood-section">
  <h2>About This Research Project</h2>

  <p>
    This project is a research-oriented study that explores the possible
    relationship between human fingerprint patterns and blood group
    classification. The system is developed using machine learning and
    deep learning techniques to analyze fingerprint images and predict
    the most probable blood group of an individual.
  </p>

  <p>
    The model is trained on fingerprint image datasets and processes the
    ridge patterns, texture features, and structural characteristics of
    fingerprints. Based on these extracted features, the trained model
    performs classification to estimate the corresponding blood group.
  </p>

  <p>
    The objective of this research is to investigate an alternative,
    non-invasive method for preliminary blood group prediction which
    could support healthcare systems in situations where traditional
    laboratory testing is not immediately available.
  </p>

  <p>
    This system demonstrates how artificial intelligence, image
    processing, and biomedical research can be combined to build
    intelligent healthcare support tools.
  </p>
</section>

<footer className="main-footer">
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
  );
}

export default BloodInfo;