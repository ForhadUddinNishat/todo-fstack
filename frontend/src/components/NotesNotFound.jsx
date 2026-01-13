import React from 'react'
import {Link} from "react-router"
import {NotebookIcon} from "lucide-react"

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto tetx-center">
        <div className="bg-primary/10 rounded-full p-8">
            <NotebookIcon className="size-10 text-primary"></NotebookIcon>
        </div>
        <h3 className="text-2xl font-bold" >No Notes yet</h3>
        <p className="text-base-content/70">Ready to organize your thoughts? Create note</p>
        <Link to={"/create"} className="btn btn-primary">
        Create Your First Note
        </Link>
    </div>
  )
}

export default NotesNotFound