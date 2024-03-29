"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`${process.env.MONGO_URL}`).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); });
//# sourceMappingURL=config.js.map