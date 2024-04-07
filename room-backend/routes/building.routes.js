import express from 'express'
const route=express.Router();
import { createBuilding, getAllBuilding,getBuildingById } from '../controllers/building.controller.js';


route.post('/create-building',createBuilding);
route.get('/buildings',getAllBuilding);
route.get('/buildings/:id',getBuildingById);


export default route;
