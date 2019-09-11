import * as express from 'express';
import { 
    ParticipantController_register_post,
    PersonController_create_post,
    PersonController_addAttribute_post,
    PersonController_get_get,
    PersonController_getAll_get,
    PersonController_getByAttribute_get } from './controllers'
export default express.Router()
.post('/participant/register', ParticipantController_register_post)
.post('/person/create', PersonController_create_post)
.post('/person/addAttribute', PersonController_addAttribute_post)
.get('/person/get/:id', PersonController_get_get)
.get('/person/getAll', PersonController_getAll_get)
.get('/person/getByAttribute/:id/:value', PersonController_getByAttribute_get)
