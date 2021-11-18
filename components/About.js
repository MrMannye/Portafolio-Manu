import Avatar from './Avatar'
import Card from './Card'

export default function About() {
    return (
        <div className='flex -mt-36'>
            <div className='flex-1 items-center justify-center p-12'>
                <Card 
                    image='/profilepic.jpg' 
                    title='Netflix-Clone' 
                    lenguage='ReactJS'
                    text='Proyecto Clone de la Pagina Oficial de Netflix usando React'
                >
                </Card>
            </div>
            <div className='flex-1 items-center justify-center p-12'>
                <Card 
                    image='/profilepic.jpg' 
                    title='Google-Clone' 
                    lenguage='NextJS'
                    text='Proyecto Clone de la Pagina Oficial de Netflix usando NextJS'
                ></Card>
            </div>
            <div className='flex-1 items-center justify-center p-12'>
                <Card 
                    image='/profilepic.jpg' 
                    title='Google-Docs' 
                    lenguage='NextJS'
                    text='Proyecto Clone de la Pagina Oficial de Netflix usando NextJS'
                ></Card>
            </div>
        </div>
    )
}
