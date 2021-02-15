// canvas task
const init = () => {
    let canvas, ctx, secondCanvas, secondCtx;

    canvas = document.getElementById('firstCanvas');
    ctx = canvas.getContext('2d');

    secondCanvas = document.getElementById('secondCanvas');
    secondCtx = secondCanvas.getContext('2d');
    // array for stars coordinates
    let starsDetail = [];
    // coordinates and colors stars
    let starsInfo = [
        {x: 75, y: 100, color: 'red'}, 
        {x: 175, y: 100, color: 'blue'}, 
        {x: 125, y: 150, color: 'black'}, 
        {x: 75, y: 200, color: 'green'}, 
        {x: 175, y: 200, color: 'yellow'} 
    ];

    const offsetX = canvas.offsetLeft;
    const offsetY = canvas.offsetTop;

    const drawStar = (cx, cy, color) => {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / 5;

        ctx.beginPath();
        ctx.moveTo(cx, cy)
        for (let i = 0; i < 5; i++) {
            x = cx + Math.cos(rot) * 30;
            y = cy + Math.sin(rot) * 30;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * 15;
            y = cy + Math.sin(rot) * 15;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - 30)
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.fillStyle = color;
        ctx.fill();
    }

    const handleMouseDown = e => {
        let mouseX = parseInt(e.clientX - offsetX);
        let mouseY = parseInt(e.clientY - offsetY);

        let selectedStarColor;

        for(let i = 0; i < starsDetail.length; i++) {
            if ((mouseX < starsDetail[i].x + 25 && mouseX > starsDetail[i].x - 25) &&
                (mouseY < starsDetail[i].y + 25 && mouseY > starsDetail[i].y - 25)) {
                selectedStarColor = starsDetail[i].color;
            }
        }
        secondCtx.fillStyle = selectedStarColor ? selectedStarColor : 'white';
        secondCtx.fillRect(0, 0, 600, 50);
        secondCtx.fill();
    }

    
    // draw all stars
    starsInfo.map( star => drawStar(star.x, star.y, star.color));
    //fill starsDetail
    starsInfo.map( star => starsDetail.push(star));

    canvas.addEventListener('click', handleMouseDown, false);
}

document.addEventListener('DOMContentLoaded', init);