"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = __importDefault(require("../models/task"));
const router = (0, express_1.default)();
router.get('/index', (req, res) => {
    res.json({ message: "Hello world" });
});
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description } = req.body;
    try {
        let task = new task_1.default({ title, description });
        yield task.save();
        res.status(200).json({ task });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: 'could not try again ' });
    }
}));
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allTask = yield task_1.default.find();
    try {
        res.status(200).json(allTask);
    }
    catch (e) {
        res.status(400).json({ error: 'there was an internal error' });
        console.log(e);
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield task_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "task deleted successfully " });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: " try again " });
    }
}));
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const { title, description } = req.body;
    try {
        yield task_1.default.findByIdAndUpdate(id, { title, description });
        res.status(200).json({ message: "Updated with successfully " });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: "Try again" });
    }
}));
exports.default = router;
