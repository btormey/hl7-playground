import { Delimeters } from './hl7-delimeters';

export class Hl7Component {
    value: string;
    position: number;
    address: string;

    constructor(value: string, baseAddress: string, position: number, private delimeters: Delimeters) {
        this.value = value;
        this.position = position;
        this.address = `${baseAddress}.${position}`;
    }
}
