import express from "express"
import {getAllNotes, createNote, updateNote, deleteNote,getNote} from "../controllers/notesControllers.js"
const router = express.Router();


//route or endpoints for read
router.get("/", getAllNotes)

router.get("/:id", getNote)
// route for create
router.post("/", createNote)
//route for update using special id
router.put("/:id", updateNote)
//route for delete using special id
router.delete("/:id",deleteNote)


export default router