import './Banner.css'
import { Outlet } from 'react-router-dom';

export default function Banner({height}){


    return (
        <section className='fh5co-top-banner'>
            <div className="site-container w-full flex justify-between flex-col relative mx-auto" style={{minHeight: height}}>           
                <Outlet/>
            </div>
        </section>
    )
}