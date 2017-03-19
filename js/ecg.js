var ctx = demo.getContext('2d'),
    w = demo.width,
    h = demo.height,
    px = 0,
    opx = 0,
    speed = 3,
    py = 180,
    opy = py,
    scanBarWidth = 20;


//duur = dubbele van count - count.
//duur = 200 --> verschil count = 100 (heartbeat)

beat();

function beat() {
    $({ countNum: 80 }).animate({ countNum: 180 }, {
        duration: 200,
        easing: 'swing',
        step: function() {
            // What todo on every count
            py = this.countNum


        },
        complete: function() {
            // Enter num from and to
            $({ countNum: 180 }).animate({ countNum: 80 }, {
                duration: 200,
                easing: 'swing',
                step: function() {
                    // What todo on every count
                    py = this.countNum


                },
                complete: function() {
                    beat();
                }
            });
        }
    });
}





loop();

function loop() {

    px += speed;

    ctx.clearRect(px, 0, scanBarWidth, h);
    ctx.beginPath();

    ctx.moveTo(opx, opy);
    ctx.lineTo(px, py);
    ctx.stroke();

    opx = px;
    opy = py;

    if (opx > w) {
        px = opx = -speed;
    }

    requestAnimationFrame(loop);
}