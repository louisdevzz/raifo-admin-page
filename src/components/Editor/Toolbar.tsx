
import { type Editor } from "@tiptap/react"
import { Bold, Italic, List, ListOrdered, Strikethrough,Link } from "lucide-react"


type Props = {
    editor: Editor | null;
    content: string;
}

export default function Toolbar({editor,content}:Props){
    if(!editor){
        return null;
    }
    return(
        <div className="flex flex-col gap-3">
            {editor&&(
                <div className="border flex flex-row gap-2 rounded-md px-2 py-2">
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleBold().run();
                        }}
                        className={
                            editor.isActive("bold")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <Bold className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleItalic().run();
                        }}
                        className={
                            editor.isActive("italic")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <Italic className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleStrike().run();
                        }}
                        className={
                            editor.isActive("strike")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <Strikethrough className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleOrderedList().run();
                        }}
                        className={
                            editor.isActive("orderedList")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <ListOrdered className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleBulletList().run();
                        }}
                        className={
                            editor.isActive("bulletList")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <List className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            editor.chain().focus().toggleLink({href:content,class:"text-green-500"}).run();
                        }}
                        className={
                            editor.isActive("bulletList")
                            ?"bg-[#3aa5f76a] h-9 px-2.5 py-2 rounded-md"
                            :"bg-transparent h-9 px-2.5"
                        }
                    >
                        <Link className="w-4 h-4 text-green-500" />
                    </button>
                </div>
            )}
        </div>
    )
}