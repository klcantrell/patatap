import paper from 'paper/dist/paper-core.min';
import '../css/circles.css';

window.addEventListener('DOMContentLoaded', function() {
  const keyData = {
    q: {
      sound: new Audio(require('../sounds/bubbles.mp3')),
      color: '#1abc9c'
    },
    w: {
      sound: new Audio(require('../sounds/clay.mp3')),
      color: '#2ecc71'
    },
    e: {
      sound: new Audio(require('../sounds/confetti.mp3')),
      color: '#3498db'
    },
    r: {
      sound: new Audio(require('../sounds/corona.mp3')),
      color: '#9b59b6'
    },
    t: {
      sound: new Audio(require('../sounds/dotted-spiral.mp3')),
      color: '#34495e'
    },
    y: {
      sound: new Audio(require('../sounds/flash-1.mp3')),
      color: '#16a085'
    },
    u: {
      sound: new Audio(require('../sounds/flash-2.mp3')),
      color: '#27ae60'
    },
    i: {
      sound: new Audio(require('../sounds/flash-3.mp3')),
      color: '#2980b9'
    },
    o: {
      sound: new Audio(require('../sounds/glimmer.mp3')),
      color: '#8e44ad'
    },
    p: {
      sound: new Audio(require('../sounds/moon.mp3')),
      color: '#2c3e50'
    },
    a: {
      sound: new Audio(require('../sounds/pinwheel.mp3')),
      color: '#f1c40f'
    },
    s: {
      sound: new Audio(require('../sounds/piston-1.mp3')),
      color: '#e67e22'
    },
    d: {
      sound: new Audio(require('../sounds/piston-2.mp3')),
      color: '#e74c3c'
    },
    f: {
      sound: new Audio(require('../sounds/prism-1.mp3')),
      color: '#95a5a6'
    },
    g: {
      sound: new Audio(require('../sounds/prism-2.mp3')),
      color: '#f39c12'
    },
    h: {
      sound: new Audio(require('../sounds/prism-3.mp3')),
      color: '#d35400'
    },
    j: {
      sound: new Audio(require('../sounds/splits.mp3')),
      color: '#1abc9c'
    },
    k: {
      sound: new Audio(require('../sounds/squiggle.mp3')),
      color: '#2ecc71'
    },
    l: {
      sound: new Audio(require('../sounds/strike.mp3')),
      color: '#3498db'
    },
    z: {
      sound: new Audio(require('../sounds/suspension.mp3')),
      color: '#9b59b6'
    },
    x: {
      sound: new Audio(require('../sounds/timer.mp3')),
      color: '#34495e'
    },
    c: {
      sound: new Audio(require('../sounds/ufo.mp3')),
      color: '#16a085'
    },
    v: {
      sound: new Audio(require('../sounds/veil.mp3')),
      color: '#27ae60'
    },
    b: {
      sound: new Audio(require('../sounds/wipe.mp3')),
      color: '#2980b9'
    },
    n: {
      sound: new Audio(require('../sounds/zig-zag.mp3')),
      color: '#8e44ad'
    },
    m: {
      sound: new Audio(require('../sounds/moon.mp3')),
      color: '#2c3e50'
    }
  };

  const canvas = document.getElementById('myCanvas'),
        circles = [];

  paper.setup(canvas);

  paper.view.onKeyDown = function() {
    const maxPoint = new paper.Point(paper.view.size.width, paper.view.size.height);
    const randomPoint = paper.Point.random();
    const point = maxPoint.multiply(randomPoint);
    const newCircle = new paper.Path.Circle(point, 200);
    if (keyData[event.key]) {
      newCircle.fillColor = keyData[event.key].color;
      keyData[event.key].sound.load();
      keyData[event.key].sound.play();
    } else {
      newCircle.fillColor = "yellow";
      keyData['d'].sound.load();
      keyData['d'].sound.play();
    }
    circles.push(newCircle);
  }

  paper.view.onFrame = function() {
    for(var i = 0; i < circles.length; i++) {
      circles[i].fillColor.hue += 1;
      circles[i].scale(.9);
      if (circles[i].area < 1) {
        circles[i].remove();
        circles.splice(i, 1);
        i--;
      }
    }
  }
});