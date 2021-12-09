export default function SocialBar() {
    return (
        <div className='socialbar z-50 flex flex-col justify-center items-center bg-blue-200 fixed right-0 top-[35%]'>
            <ul className=' -ml-7'>
                <li className='py-2'><a href="https://www.facebook.com/manuaguis/" target='_blank'><i className="uil uil-facebook scroll__icon"></i></a></li>
                <li className='py-2'><a href="https://www.instagram.com/manu__7u7/" target='_blank'><i className="uil uil-instagram scroll__icon"></i></a></li>
                <li className='py-2'><a href="https://github.com/MrMannye" target='_blank'><i className="uil uil-github scroll__icon"></i></a></li>
                <li className='py-2'><a href="https://www.linkedin.com/in/miguel-aguilera-sanchez-233567209/" target='_blank'><i className="uil uil-linkedin scroll__icon"></i></a></li>
            </ul>
        </div>
    )
}
