import Building from '../models/building.model.js';
import Room from '../models/room.model.js';
import {v4 as uuid4} from 'uuid';

export const createBuilding= async (req,res)=>{
    const { name } = req.body;
    const newBuilding = new Building({ name });
    try {
      // Create 4 rooms initially for the building
      for (let i = 1; i <= 4; i++) {
        const room = new Room({
          id: uuid4(),
          occupantName: 'smit',
          currentTemperature: Math.floor(Math.random() * (40 - 10 + 1) + 10),
        });
        const { heatingEnabled, coolingEnabled } = determineHeatingCooling(room.currentTemperature, newBuilding.requestedTemperature);
        room.heatingEnabled = heatingEnabled;
        room.coolingEnabled = coolingEnabled;
        newBuilding.rooms.push(room);
      }
      const savedBuilding = await newBuilding.save();
      res.status(201).json(savedBuilding);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}


const determineHeatingCooling = (roomTemperature, buildingTemperature) => {
    if (roomTemperature < buildingTemperature) {
      return { heatingEnabled: true, coolingEnabled: false };
    } else if (roomTemperature > buildingTemperature) {
      return { heatingEnabled: false, coolingEnabled: true };
    } else {
      return { heatingEnabled: false, coolingEnabled: false };
    }
  };