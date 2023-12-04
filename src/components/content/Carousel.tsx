import * as React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-simply-carousel";
import Second from "../../assets/images/secondimg.png";
import First from "../../assets/images/firstImg.png";



const images = [First, Second];

export const CustomCarousel = () => {
const [activeSlide, setActiveSlide] = React.useState(0);



return (
<Box sx={{ maxWidth: 400, overflowX:'scroll',  }}>
    <Carousel
    containerProps={{
        style: {
        width: "100%",
        background:'none !important',
        justifyContent: "space-between",
        userSelect: "none"
        }
    }}
    // centerMode
    preventScrollOnSwipe
    swipeTreshold={100}
    activeSlideIndex={activeSlide}
    activeSlideProps={{
        style: {
        // background: "#fff",
        margin:'0px 40px',
        background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 27.5%, rgba(22, 93, 255, 0.162) 157.71%)'

        }
    }}
    autoplay={true}
    onRequestChange={setActiveSlide}
    forwardBtnProps={{
        style: {
        display:'none',          
        }
    }}
    backwardBtnProps={{
        style: {
            display:'none',              
        }
    }}
    
    itemsToShow={3}
    speed={5000}
    
    >
    {images.map((item, index) => (
        <div key={index} style={{ margin:'0px 40px'}}>
            <img src={item}height={150}/>
        </div>
    ))}
    </Carousel>

</Box>
);
};
