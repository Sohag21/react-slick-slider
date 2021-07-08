import { React, useRef, useState} from 'react'
import './Home.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


export default function Home() {
    const [slideNumber, setslideNumber] = useState(0);
    const slickRef = useRef();

    const handleClickArrow = (direction) =>{
        let distance = slickRef.current.getBoundingClientRect().x-50
        if(direction === "left" && slideNumber > 0){
            setslideNumber(slideNumber - 1);
            slickRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 4){
            setslideNumber(slideNumber + 1);
            slickRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    };
    return (
        <div className="carousel-21">
            <div className="wrapper">
            <FaChevronLeft onClick={()=>handleClickArrow("left")} className="slickArrow Arrowleft" />
            <div className="data-container" ref={slickRef}>
                <div className="slider-item">
                    item 1
                </div>
                <div className="slider-item">
                    item 2
                </div>
                <div className="slider-item">
                    item 3
                </div>
                <div className="slider-item">
                    item 4
                </div>
                <div className="slider-item">
                    item 5
                </div>
                <div className="slider-item">
                    item 6
                </div>
                <div className="slider-item">
                    item 7
                </div>
                <div className="slider-item">
                    item 8
                </div>
                <div className="slider-item">
                    item 9
                </div>
                <div className="slider-item">
                    item 10
                </div>
            </div>
            <FaChevronRight onClick={()=>handleClickArrow("right")} className="slickArrow Arrowright" />

            </div>
        </div>
    )
}
