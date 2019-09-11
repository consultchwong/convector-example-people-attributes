import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController, FlatConvectorModel } from '@worldsibu/convector-core';
import { Person, Attribute } from './person.model';
export declare class PersonController extends ConvectorController<ChaincodeTx> {
    create(person: Person): Promise<void>;
    addAttribute(personId: string, attribute: Attribute): Promise<void>;
    get(id: string): Promise<Person>;
    getAll(): Promise<FlatConvectorModel<Person>[]>;
    getByAttribute(id: string, value: any): Promise<Person | Person[]>;
}
