import { Hl7Component } from './hl7-component';
import { Delimeters } from './hl7-delimeters';

export class Hl7Field {
    value: string;
    position: number;
    address: string;
    components: Hl7Component[] = [];
    repeating: boolean;
    repetitions: Hl7Field[] = [];

    constructor(value: string, address: string, private delimeters: Delimeters) {
        this.value = value;
        this.address = address;
        this.repeating = this.value.indexOf(this.delimeters.repetitionSeperator) !== -1 && 
            this.address !== this.delimeters.delimeterFieldAddress;
        
    }

    parse(): Hl7Field {
        if(this.address === this.delimeters.delimeterFieldAddress) {
            return this;
        }

        if (this.repeating) {
            const split = this.value
                .split(this.delimeters.repetitionSeperator);

            for (let i = 0; i < split.length; i++) {
                this.repetitions.push(new Hl7Field(split[i], `${this.address}[${i}]`, this.delimeters)
                    .parse());
            }
        } else {
            const split = this.value
                .split(this.delimeters.componentSeperator);

            if (split.length > 1) {
                for (let i = 0; i < split.length; i++) {
                    this.components
                        .push(new Hl7Component(split[i], this.address, i + 1, this.delimeters));
                }
            }
        }

        return this;
    }
}
