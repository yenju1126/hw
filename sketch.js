var sound1
function preload(){
  sound1 = loadSound("0.mp3") //先把音樂檔載入到sound1程式碼中
}


function setup() {
  createCanvas(windowWidth, windowHeight); // 設定畫布大小
  background("#26547c"); // 背景顏色
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

var t1 = [60, 0, 0, 104.4, 120, 104.4]; // 定義三角形的三個點座標

var e1x = 60 //圓心位置 x = 60
var e1y = 69.6 //圓心位置 y = 69.6
var e1w = 69.6 //圓直徑為69.6

var rx = 60 //方形x軸起始點為60
var ry = 69.9 //方形y軸起始點為69.9
var rw = 60 //長寬為60
var fc

function draw() {
  background("#26547c"); 
  
  noFill(); // 不要填滿顏色
  if(sound1.isPlaying())
  {
     fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else
  {
    fc = map(mouseX,0,width,0,100)
  }
  for(var i=0;i<(width/50);i=i+1){ // 根據網格的位置在畫布上繪製圖型， 控制圖形在水平方向上的數量
  for(var j=0;j<(height/50);j++) //控制圖形在垂直方向上的數量
  {

  stroke("#ef476f"); // 三角形框線顏色  
  strokeWeight(1); // 設置線條粗度
  push();
  translate(i * 100, j * 100);
  rotate(fc + mouseY/200); // 根據滑鼠位置旋轉三角形
  triangle(60, 0, 0, 104.4, 120, 104.4); // 繪製三角形
  pop();

  stroke("#ffd166"); //圓框線顏色
  strokeWeight(2); // 設置線條粗度
  ellipse(e1x+(i*100),e1y+(j*100),e1w + fc + mouseY/20) 
  //畫圓，座標根據當前網格位置的偏移量 i 和 j 進行調整。

  stroke("#06d6a0"); //方形線顏色
  strokeWeight(2); // 設置線條粗度
  rect(rx+(i*100),ry+(j*100),rw +fc + mouseY/20) 
  //畫方形，座標根據當前網格位置的偏移量 i 和 j 進行調整。
  }
  }
} 

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
}

}