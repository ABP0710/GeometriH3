import { SideA } from "./side-a";

export class Block extends SideA {
    sideB: number;

    constructor(sideA: number, sideB: number){
        super(sideA);
        this.sideB = sideB;
    }
}
