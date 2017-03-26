export class Hl7MessageHeader {
    sendingApplication: string;
    sendingFacility: string;
    receivingApplication: string;
    receivingFacility: string;
    timeStamp: Date;
    type: string;
}
