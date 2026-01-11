import Note from "../models/Note.js"

export const getAllNotes = async (req, res) =>{
    try {
        const notes = await Note.find().sort({createdAt: -1}) //newst first
        res.status(200).json(notes)     
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({message: "Server error"})        
    }
}
export const getNote = async (req, res) =>{
    try {
        const note = await Note.findById(req.params.id)
        if(!note){return res.status(404).json({message: "Not found"})}
        res.status(200).json(note)     
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({message: "Server error"})        
    }
}

export const createNote = async (req, res) =>{
    try {
        const {title, content} = req.body;
        const note = new Note({title:title, content:content})
        const savedNote= await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error: ", error)
        res.status(500).json({message: "Server error"})     
    }
}

export const updateNote = async (req, res) =>{
    try{
    const {title, content}=req.body;
    const updatedNote= await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
    if(!updatedNote){return res.status(404).json({message:"Wrong"})}
    res.status(200).json(updatedNote)
    }catch (error) {
        console.error("Error: ", error)
        res.status(500).json({message: "Server error"})     
    }

}

export const deleteNote =  async (req, res) =>{
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){return res.status(404).json({message: "not found"})}
        res.status(200).json({message: "Deleted successfully"})       
    } catch (error) {
        console.error("Error: ", error)
        res.status(500).json({message: "Server error"}) 
        
    }
}