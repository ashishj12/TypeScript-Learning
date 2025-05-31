var Player = /** @class */ (function () {
    function Player(height, weight) {
        var _this = this;
        this.height = height;
        this.weight = weight;
        this.myHeight = function () {
            return _this.height;
        };
        this.height = height,
            this.weight = weight;
    }
    return Player;
}());
var user = new Player(100, 40);
console.log(user.weight);
