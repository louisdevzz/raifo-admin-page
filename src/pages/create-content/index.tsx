import dynamic from 'next/dynamic'

const CreateContent = dynamic(() => import('@/components/Content/CreateContent'), {
  ssr: false
})

export default function CreateContentPage(){
    return(
        <CreateContent/>
    )
}