export class SlothMachine {
    private coins: number;
    private statusCombination: boolean[];

    constructor() {
        this.coins = 0;
        this.statusCombination = [false, false, false];
    }

    play(): void {
        for (let i = 0; i < 3; i++) {
            this.statusCombination[i] = Math.random() > 0.5;
        }
        this.checkAndWriteResult();
    };

    private checkAndWriteResult() {
        const isLosser: boolean = this.statusCombination.some((combinationItem: boolean) => combinationItem === false);

        if (isLosser) {
            console.log('Good luck next time!!');
            this.coins++;
        } else{
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        }
    }
}