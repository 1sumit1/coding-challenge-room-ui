import express from 'express'
const route=express.Router();
import { createBuilding } from '../controllers/building.controller.js';


route.post('/create-building',createBuilding);


export default route;
