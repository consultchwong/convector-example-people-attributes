import { ConvectorModel } from '@worldsibu/convector-core';
export declare class Attribute extends ConvectorModel<Attribute> {
    readonly type: string;
    content: any;
    issuedDate: number;
    expiresDate: Date;
    expired: boolean;
    certifierID: string;
}
export declare class Person extends ConvectorModel<Person> {
    readonly type: string;
    name: string;
    attributes: Array<Attribute>;
}
