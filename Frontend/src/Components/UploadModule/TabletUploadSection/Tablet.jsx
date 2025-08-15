import styles from "./Tablet.module.css";
import NavBar from "../../CommonModule/NavBarModule/NavBar";
import { TfiGallery } from "react-icons/tfi";

const Tablet = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <section className={styles.uploadArea}>
          <label htmlFor="file-input" className={styles.uploadImage}>
            <TfiGallery />

            <p>Upload Your Wallpaper</p>

            {/* <input id="file-input" type="file" accept="image/*" /> */}
          </label>

          <div className={styles.uploadGuide}>
            <h1>How To Upload Your Wallpaper</h1>

            <ol>
              <li>
                Select Device Type from the side tab:
                <ul>
                  <li>Desktop</li>
                  <li>
                    <span>Tablet</span>
                  </li>
                  <li>Mobile</li>
                </ul>
              </li>
              <li>Click &quot;Upload Your Wallpaper&quot;.</li>
              <li>Check Recommented Sizes for best quality.</li>
              <li>Make sure your file is JPGE or SVG, max 25 MB.</li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
};
export default Tablet;
