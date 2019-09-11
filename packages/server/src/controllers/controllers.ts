import { Request, Response } from 'express';
import { ParticipantControllerBackEnd } from '../convector';
import { PersonControllerBackEnd } from '../convector';


export async function ParticipantController_register_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ParticipantControllerBackEnd
                .register(params.id,params.name));
            
    } catch(ex) {
        console.log('Error post ParticipantController_register', ex.stack);
        res.status(500).send(ex);
    }
}
export async function PersonController_create_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await PersonControllerBackEnd
                .create(params.person));
            
    } catch(ex) {
        console.log('Error post PersonController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function PersonController_addAttribute_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await PersonControllerBackEnd
                .addAttribute(params.personId,params.attribute));
            
    } catch(ex) {
        console.log('Error post PersonController_addAttribute', ex.stack);
        res.status(500).send(ex);
    }
}
export async function PersonController_get_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await PersonControllerBackEnd
            .get(params.id));
        
    } catch(ex) {
        console.log('Error get PersonController_get', ex.stack);
        res.status(500).send(ex);
    }
}
export async function PersonController_getAll_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await PersonControllerBackEnd
            .getAll());
        
    } catch(ex) {
        console.log('Error get PersonController_getAll', ex.stack);
        res.status(500).send(ex);
    }
}
export async function PersonController_getByAttribute_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await PersonControllerBackEnd
            .getByAttribute(params.id,params.value));
        
    } catch(ex) {
        console.log('Error get PersonController_getByAttribute', ex.stack);
        res.status(500).send(ex);
    }
}