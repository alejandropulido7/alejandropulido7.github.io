import { useEffect, useState } from 'react';
import './Banner.css'
import Intro from './Intro';
import About from '../about/About';
import { Outlet } from 'react-router-dom';

export default function Banner(){

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fullHeight = () => {
        return windowDimensions
    }

    return (
        <section className="fh5co-top-banner w-full flex justify-between flex-col" style={{minHeight: fullHeight().height}}>
            <Outlet/>
        </section>
    )
}