import { useEffect, useState } from "react";
import { Chart, BarController, BarElement, PointElement, LinearScale, Title, CategoryScale, Legend } from "chart.js";
Chart.register(BarController, BarElement, PointElement, LinearScale, Title, CategoryScale, Legend);

export default function BarChart({ labels, active, inactive, loading }) {
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        if(labels && labels.length !== 0 && active && active.length !== 0 && inactive && inactive.length !== 0){
            setSuccess(true);
        }
        var ctx = document.getElementById('myChart').getContext('2d');
        var existingChart = Chart.getChart(ctx); // Get the existing chart instance

        if (existingChart) {
            existingChart.destroy(); // Destroy the existing chart
        }

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: active,
                    label: "Active",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181, 0.5)",
                    borderWidth: 2
                }, {
                    data: inactive,
                    label: "Inactive",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgb(255, 99, 132, 0.5)",
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            stepSize: 1,
                            suggestedMin: 0,
                            precision: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'white'
                        }
                    }
                }
            },
        });

        // Clean up the chart when component is unmounted
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [labels, active, inactive]);

    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg overflow-hidden flex flex-col bg-wr_gray border border-accent mt-8`}>
            <div className="text-white bold text-3xl mb-6">
                Activity by Region:
            </div>
            <div className={`flex mx-auto w-full h-80 ${!success ? 'hidden' : ''}`}>
                <div className='rounded-xl w-full h-full shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
            <div className={`text-white text-sm ${success ? 'hidden' : ''}`}>
                {!loading && (success ? "" : "No Data")}
            </div>
        </div>
    );
}
