import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.header}>Carbon Cell</h1>

            <div className={styles.links}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    <div className={styles.linkChild}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Home
                    </div>
                </NavLink>
                <NavLink
                    to="/population"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    <div className={styles.linkChild}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Population
                    </div>
                </NavLink>
                <NavLink
                    to="/crypto"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    <div className={styles.linkChild}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="12" x2="12" y1="2" y2="22" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Crypto Prices
                    </div>
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;
