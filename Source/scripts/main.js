const G = 6.67408 * 10 ** -11;
const m1 = 100;
const m2 = 50;
const r = 100;

const obj1 = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    mass: m1,
};
const obj2 = {
    x: 100,
    y: 0,
    vx: 0,
    vy: 0,
    mass: m2,
};

while (true) {
    const force = G * m1 * m2 / (r ** 2);
};

function somar(a, b){
    console.log(a + b);
};
