import { Stage } from "./stage";

export class Game {
    constructor() {
        this._stage = new Stage()
        this._startGameLoop()
    }

    _startGameLoop() {
        setInterval(this._update.bind(this), 1000 / 60);
    }

    _update() {
        this._stage.update()

    }
}
