/**
 * Created by Administrator on 2018/4/10.
 */
// 判断大鱼和果实的距离
function momFruitsCollision() {
    if(!data.gameOver){
        for (var i = 0; i < fruits.num; i++) {
            if (fruits.alive[i]) {
                var l = calLength2(fruits.x[i], fruits.y[i], mom.x, mom.y);
                if (l < 900) {
                    fruits.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if (mom.momBodyCount > 7) {
                        mom.momBodyCount = 7;
                    }
                    if (fruits.fruitType[i] == 'blue') {
                        data.double = 2;
                    } else {
                        data.double = 1;
                    }
                    wave.born(fruits.x[i],fruits.y[i]);
                }
            }
        }
    }

}
//baby and mom  collsion
function momBabyCollison() {
    if (data.fruitNum > 0 && !data.gameOver) {
        var l = calLength2(mom.x, mom.y, baby.x, baby.y);
        if (l < 900) {
            baby.babyBodyCount = 0;
            mom.momBodyCount = 0;
            data.addScore();
            halo.born(baby.x,baby.y)
        }
    }
}
