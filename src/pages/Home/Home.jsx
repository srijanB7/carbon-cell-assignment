import React from "react";
import styles from "../Home/Home.module.css";
import { Chart as ChartJs } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
function Home() {

    
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <h1>
                        Hello, <span className={styles.name}>George Janko</span>{" "}
                        👋🏻
                    </h1>
                    <h2>Welcome to Spot Trading!</h2>
                </div>
                <div>
                    <button className={styles.tradingBtn}>Start Trading</button>
                </div>
            </nav>
            <main className={styles.mainContent}>
                <div className={styles.lineContainer}>
                    <h3>Market Overview</h3>
                    <Line
                        data={{
                            labels: [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                            ],
                            datasets: [
                                {
                                    label: "Weekly Status",
                                    data: [0.3, 0.2, 0.7, 0.4, 0.95, 1.2, 0.89],
                                },
                            ],
                        }}
                    />
                </div>
                <div className={styles.doughnutContainer}>
                    <Doughnut
                        data={{
                            labels: ["USDT", "NBST", "EFT", "WET"],
                            datasets: [
                                {
                                    label: "Wallet Ballance",
                                    data: [300.56, 270.72, 203.04, 329.76],
                                },
                            ],
                        }}
                    />
                </div>
                <div className={styles.newsContainer}>
                    <h2>Recent News</h2>
                    <p>
                        Wormhole Debuts at $3B Valuation in 617M Token Airdrop
                        Based on the debut price, the project's W token has a
                        fully diluted value of $16.5 billion.
                    </p>
                </div>
            </main>
        </>
    );
}

export default Home;
