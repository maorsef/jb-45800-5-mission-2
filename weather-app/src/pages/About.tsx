import myImage from "../assets/5433.png";

const About = () => {
  return (
    <div className="container">
      <div className="card about">
        <h1>אודות</h1>

        <img src={myImage} className="profile-img" />

        <p>
          אתר זה מציג מידע עדכני על מזג האוויר לפי יישובים בישראל באמצעות API חיצוני.
        </p>

        <p>
          האתר פותח באמצעות React ו-TypeScript ומותאם לכל סוגי המסכים.
        </p>

        <p>פותח על ידי: מאור ספטי</p>
      </div>
    </div>
  );
};

export default About;