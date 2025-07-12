export let donutData = [
    {
        radius: 150,
        thickness: 20,
        startAngle: -Math.PI / 2,
        data: [
            { value: 60, color: '#aef359' },
            { value: 40, color: '#000000' }
        ]
    },
    {
        radius: 140,
        thickness: 35,
        startAngle: Math.random() * 2 * Math.PI,
        data: [
            { value: 30, color: '#ffaa00' },
            { value: 70, color: '#33cc33' }
        ]
    },
    {
        radius: 110,
        thickness: 35,
        startAngle: Math.random() * 2 * Math.PI,
        data: [
            { value: 50, color: '#9933ff' },
            { value: 50, color: '#ffcc00' }
        ]
    }
];

export function renderCharts() {
    const canvas = document.getElementById('homepies');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

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