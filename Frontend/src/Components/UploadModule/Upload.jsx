import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Upload.module.css";
import SideBar from "../SideBarModule/SideBar";
import Tablet from "./TabletUploadSection/Tablet";

const Upload = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.mainContent}>
        <SideBar />
        <div className={styles.galleryContent}>
          <div className={styles.blendOverlay} />
          <Routes>
            <Route path="tablet" element={<Tablet />} />
            <Route path="" element={<Navigate to="tablet" replace />} />
          </Routes>
          <div className={styles.blendOverlay2} />
        </div>
      </div>
    </div>
  );
};

export default Upload;
