/**
 * Created by Administrator on 2018/4/14.
 */
var restartObj = function () {
     this.x= can1.width*0.5;
    this.y = can1.height*0.5;
    this.alpha = 0;
};
restartObj.prototype.init = function() {
    this.x= can1.width*0.5;
    this.y = can1.height*0.5;
    this.alpha = 0;
};
restartObj.prototype.draw = function () {
    ctx1.save();
    ctx1.fillStyle = "white";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = 'white';

    if(this.gameOver) {
        this.alpha += deltaTime * 0.0005;
        if(this.alpha >1){
            this.alpha = 1;
        }

        ctx1.fillStyle = 'rgba(255,255,255,'+this.alpha+')';
        ctx1.fillText('RESTART',this.x,this.y-100);
    }
    ctx1.restore();
};