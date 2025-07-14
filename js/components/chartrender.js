import { getDonutData } from "./charts.js";

export function renderCharts() {
    const canvas = document.getElementById('homepies');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const donutData = getDonutData();

    donutData.forEach(chart => {
        let start = chart.startAngle;
        chart.data.forEach(seg => {
            const end = start + (seg.value / 100) * 2 * Math.PI;
            ctx.beginPath();
            ctx.arc(cx, cy, chart.radius, start, end);
            ctx.arc(cx, cy, chart.radius - chart.thickness, end, start, true);
            ctx.closePath();
            ctx.fillStyle = seg.color;
            ctx.fill();
            start = end;
        });
    });
}
