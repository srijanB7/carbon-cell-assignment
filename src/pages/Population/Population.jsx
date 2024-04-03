import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import styles from "./Population.module.css";

function Population() {
    const [data, setData] = React.useState({});
    const [status, setStatus] = React.useState("loading");
    React.useEffect(() => {
        async function getPopulationData() {
            setStatus("loading");
            try {
                const response = await fetch(
                    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
                );
                const data = await response.json();
                setData(data);
                setStatus("success");
            } catch (err) {
                setStatus("error");
            }
        }
        getPopulationData();
    }, []);

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Population Stats</h1>
            <div className={styles.lineContainer}>
                <Line
                    data={{
                        labels: data?.data?.reduce((acc, val) => {
                            acc.push(val.Year);
                            return acc;
                        }, []),
                        datasets: [
                            {
                                label: "US Population",
                                data: data?.data?.reduce((acc, val) => {
                                    acc.push(val.Population);
                                    return acc;
                                }, []),
                                backgroundColor: "#FFF",
                                borderColor: "#064FF0",
                            },
                        ],
                    }}
                />
            </div>
            <div className={styles.barContainer}>
                <Bar
                    data={{
                        labels: data?.data?.reduce((acc, val) => {
                            acc.push(val.Year);
                            return acc;
                        }, []),
                        datasets: [
                            {
                                label: "US Population",
                                data: data?.data?.reduce((acc, val) => {
                                    acc.push(val.Population);
                                    return acc;
                                }, []),
                                borderColor: "#36A2EB",
                                backgroundColor: "#9BD0F5",
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
}

export default Population;
