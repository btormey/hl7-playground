import { Hl7Field } from './hl7-field';
import { Delimeters } from './hl7-delimeters';

export class Hl7Segment {
    name: string;
    value: string;
    fields: Hl7Field[] = [];

    constructor(value: string, private delimeters: Delimeters) {
        this.value = value;
    }

    parse(): Hl7Segment {
        const split = this.value
            .split(this.delimeters.fieldSeperator);

        this.name = split[0];

        if(this.name == 'MSH') {
            split.splice(1, 0, '|');
        }

        for (let i = 1; i < split.length; i++) {
            this.fields
                .push(new Hl7Field(split[i], `${this.name}.${i}`, this.delimeters)
                    .parse());
        }

        return this;
    }
}
