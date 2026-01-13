import React from 'react'
import {Link} from "react-router"
import {useState, useEffect, } from 'react'
import {useNavigate, useParams } from 'react-router'
import api from "../lib/axios"
import toast from 'react-hot-toast'
import { LoaderIcon, ArrowLeftIcon, Trash2Icon} from "lucide-react"

export const NoteDetailPage = () => {
  const [note, setNote] =useState(null)
  const [loading, setLoading] =useState(true)
  const[saving, setSaving] =useState(false)
  const navigate= useNavigate()

  const {id} =useParams()

  useEffect(() =>{
    const fetchNote = async()=>{
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
        
      } catch (error) {
        console.error("Error: ", error)
        toast.error("Failed")     
      }finally{
        setLoading(false)
      }
    }
    fetchNote();
  }, [id])
  console.log({note})
  if(loading){
    return(
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10"></LoaderIcon>
      </div>
    )
  }
  const handleDelete= async()=>{
    if(!window.confirm("Are yo sure?")) return;
    try {
      await api.delete(`/notes/${id}`)
      toast.success("Note deleted")
      navigate("/")
      
    } catch (error) {
      console.error("Error: ", error)
      toast.error('Failed to delete note')
    }
  }
  const handleSave = async() =>{
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Please add a title or content")
      return
    }
    setSaving(true)
    try {
      await api.put(`/notes/${id}`, note)
      toast.success("Note update successfilly")
      navigate("/")
      
    } catch (error) {
      console.log("Error saving the note:", error)
      toast.error("Failed to update")
    }finally{
      setSaving(false)
    }

  }



  return (
    <div className="min-h-screen bg-base-200">
      <div className="conatiner mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost">
            <ArrowLeftIcon className="h-5 w-5"></ArrowLeftIcon>
            Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5"></Trash2Icon>
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">

                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) =>{setNote({...note, title: e.target.value})}}></input>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <textarea placeholder="Write your note here"
                className="textarea textarea-bordered h-32"
                value={note.content}
                onChange={(e) =>{setNote ({...note, content: e.target.value})}}>
                </textarea>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave} >
                  {saving? "Saving" : "Save Changes"}
                </button>
              </div>


            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
export default NoteDetailPage