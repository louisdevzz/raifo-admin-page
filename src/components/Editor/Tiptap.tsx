'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Link from '@tiptap/extension-link'


const Tiptap = ({onChange,content}:any) => {
    const handleChange = (newContent:string)=>{
        onChange(newContent)
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                HTMLAttributes:{
                    style:"color:green"
                }
            })
        ],
        editorProps:{
            attributes:{
                class:"min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            }
        },
        onUpdate:({editor})=>{
            handleChange(editor.getHTML())
        }
    })

    return (
        <div className='w-full mt-2'>
            <Toolbar editor={editor} content={content}/>
            <div className='mt-2'>
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Tiptap