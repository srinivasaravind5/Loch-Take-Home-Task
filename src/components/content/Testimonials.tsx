import {Divider, styled} from "@mui/material";
import { Flex } from "../../StyledItems";
import RectangleImg from "../../assets/images/Rectangle.png";
import { TestimonialSlider } from "./TestimonialSlides";


const Title = styled('p')(()=>({
    fontSize:"22px",
    fontWeight: 500,
    margin: '0px 50px 0px auto',
    lineHeight: '30px'
}));


export const Testimonial = () => {
    return  (
    <Flex margin="0px 0px 0px 50px " flexDirection="column">
        <Title>Testimonials</Title>
        <Divider style={{border:'0.5px solid #E5E5E6', margin: '5px 100px 0px 0px', width: '100%'}} />
        <Flex width="100%" margin="10px 0px 0px 0px" style={{}}>
            <img src={RectangleImg} height={60} width={60} style={{marginTop:'15px'}}/>
            <Flex>
                <TestimonialSlider />
            </Flex>
        </Flex>
    </Flex>)
}