/**
 * Created by Administrator on 2018/4/10.
 */
var fruitObj = function () {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.aneNo = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
};
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = true;
        this.y[i] = 0;
        this.x[i] = 0;
        this.aneNo[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;
        this.fruitType[i] = '';

    }
    this.orange.src = './src/fruit.png';
    this.blue.src = './src/blue.png';
};
fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {

            if (this.fruitType[i] == 'blue') {
                var pic = this.blue;
            } else {
                var pic = this.orange;
            }
            if (this.l[i] <= 14) {
                this.l[i] += this.spd[i] * deltaTime;
                this.x[i] = ane.headx[this.aneNo[i]];
                this.y[i] = ane.heady[this.aneNo[i]];
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};

fruitObj.prototype.born = function (i) {
    this.aneNo[i] = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.2) {
        this.fruitType[i] = 'blue';
    }
    else {
        this.fruitType[i] = 'orange';
    }
};
fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
};
function fruitsMonitor() {
    var num = 0;
    for (var i = 0; i < fruits.num; i++) {
        if (fruits.alive[i]) num++;
    }
    if (num < 15) {
        sendFruit();
        return;
    }
}

function sendFruit() {
    for (var i = 0; i < fruits.num; i++) {
        if (!fruits.alive[i]) {
            fruits.born(i);
            return;
        }
    }
}
