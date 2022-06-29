import p5 from "p5";
import "./style.css";

const size = 500;

try {
  new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(size, size);
      p.noLoop();
      // p.frameRate(1);
    };

    p.draw = () => {
      p.background(255);
    };
  }, document.getElementById("app")!);
} catch (error: any) {
  console.log(error);
}