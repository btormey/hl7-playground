export class Delimeters {
    segmentSeperator = '\n';
    fieldSeperator: string;
    componentSeperator: string;
    escapeCharacter: string;
    subComponentSeperator: string;
    repetitionSeperator: string;

    constructor(delimters: string[]) {
        if (delimters.length !== 5) {
            throw new Error('Invalid message delimeters');
        }

        this.fieldSeperator = delimters[0];
        this.componentSeperator = delimters[1];
        this.repetitionSeperator = delimters[2];
        this.escapeCharacter = delimters[3];
        this.subComponentSeperator = delimters[4];
    }
}
