import { Hl7MessageHeader } from './hl7-message-header';
import { Delimeters } from './hl7-delimeters';
import { Hl7Segment } from './hl7-segment';

export class Message {
    value: string;
    header: Hl7MessageHeader;
    delimeters: Delimeters;
    segments: Hl7Segment[];

    constructor(value: string = '') {
        this.value = value;
    }

    parse(): Message {
        if (this.value.indexOf('MSH') !== 0) {
            return;
        }

        this.delimeters = new Delimeters(this.value.substr(3, 5).split(''));
        this.segments = this.value
            .split(this.delimeters.segmentSeperator)
            .map(segment => {
                return new Hl7Segment(segment, this.delimeters).parse();
            });

        return this;
    }
}
