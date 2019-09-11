import * as express from 'express';
import { 
    ParticipantController_register_post,
    PersonController_create_post,
    PersonController_get_get } from './controllers'
export default express.Router()
.post('/participant/register', ParticipantController_register_post)
.post('/person/create', PersonController_create_post)
.get('/person/get/:id', PersonController_get_get)
