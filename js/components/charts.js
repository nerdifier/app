import { getExpPercent } from "./exp.js";

export function getDonutData() {
    const expPercent = getExpPercent();

    return [
        {
            radius: 150,
            thickness: 20,
            startAngle: -Math.PI / 2,
            data: [
                { value: expPercent, color: '#aef359' },
                { value: 100 - expPercent, color: '#00000000' }
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
}