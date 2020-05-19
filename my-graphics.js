function initGraphics(initWidth, initHeight) {
    cnv.width = initWidth;
    cnv.height = initHeight;

    ctx.line = function (x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    ctx.strokeTriangle = function(x1, y1, x2, y2, x3, y3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    }

    ctx.fillTriangle = function(x1, y1, x2, y2, x3, y3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }

    ctx.strokeQuad = function(x1, y1, x2, y2, x3, y3, x4, y4) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.stroke();
    }

    ctx.fillQuad = function(x1, y1, x2, y2, x3, y3, x4, y4) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.fill();
    }

    ctx.strokeCircle = function(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.Pi);
        ctx.stroke();
    }

    ctx.fillCircle = function(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.Pi);
        ctx.fill();
    }
}

