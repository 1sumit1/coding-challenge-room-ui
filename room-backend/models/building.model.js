import mongoose from "mongoose";
const {Schema}=mongoose;
import { roomSchema } from "./room.model.js";

const buildingSchema = new Schema({
  name: { type: String, required: true },
  requestedTemperature: { type: Number, default: 20.0 },
  rooms: [roomSchema],
});

export default mongoose.model('Building',buildingSchema)