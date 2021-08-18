

const limit = (lower, upper, x, y) => {
    const diff = upper - lower;
    const widthPercent = x / window.innerWidth;
    const heightPercent = y / window.innerHeight;
    const avgPercent = Math.max(widthPercent, heightPercent);
    const proportion = avgPercent * diff;
    return lower + proportion;
  };

const setColours = (x, y) => {  

const col1 = limit(200, 280, x, y);
const col2 = limit(260, 340, x, y);
const col3 = limit(320, 350, x, y);
const col4 = limit(340, 360, x, y);

document.body.style.setProperty("--col1", col1);
document.body.style.setProperty("--col2", col2);
document.body.style.setProperty("--col3", col3);
document.body.style.setProperty("--col4", col4);
}


const handleMouseMove = event => {
    setColours(event.x, event.y)
  };

window.addEventListener("mousemove", handleMouseMove)

setColours(0, 0)