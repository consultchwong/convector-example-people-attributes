import { ConvectorController } from '@worldsibu/convector-core';
import { Participant } from './participant.model';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
export declare class ParticipantController extends ConvectorController<ChaincodeTx> {
    register(id: string, name: string): Promise<void>;
    changeIdentity(id: string, newIdentity: string): Promise<void>;
    get(id: string): Promise<Participant>;
    getAll(): Promise<any[]>;
}
