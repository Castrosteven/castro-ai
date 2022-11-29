import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import * as styles from "./navbar.module.scss";
import { useCompanyMetadata } from "../../hooks/useCompanyMetadata";
import { navigate } from "gatsby";
export const Navbar = () => {
  const { imageUrl } = useCompanyMetadata();
  return (
    <div className={styles.navbarContainer}>
      <nav>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.brand}
        >
          <img src={imageUrl} alt="Castro AI" width={40} height={40} />
          <h2>Castro Ai</h2>
        </div>
        <div className={styles.hamburger}>
          <RxHamburgerMenu size={30} />
        </div>
        <ul className={styles.navItems}>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Our Work</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
