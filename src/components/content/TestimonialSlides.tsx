import { styled } from "@mui/material";

const Name = styled("b")(() => ({
  weight: 600,
  color: "#19191A",
  fontSize: "16px",
  lineHeight: "19.2px",
}));

const Position = styled("span")(() => ({
  weight: 500,
  color: "#96979A",
  fontSize: "12px",
  lineHeight: "15.6px",
}));

const Content = styled("p")(() => ({
    marginTop:'10px',
  weight: 500,
  fontSize: "16px",
  lineHeight: "19.2px",
}));

const CardWrapper = styled('div')(({margin, borderRadius, width, color, flexDirection, alignItems, padding})=>({
    width,
    color,
    padding,
    flexDirection,
    alignItems,
    margin,
    minWidth:'300px',
    borderRadius,
    background:'#FFF',
}));

const Wrapper = styled('div')(()=>({
    borderRadius : "8px",
    textAlign : "left",
    background : "none",
    height : "auto",
    flexDirection : 'row',
    margin : "10px 0px 0px 0px ",
    padding : "0px",
    justifyContent : 'space-between',
    width : "600px",
    alignItems : "center",
    color : "#FFF",
    display:'flex',
    overflowX: 'scroll', // Enable horizontal scrolling
    scrollbarWidth: 'none', // Hide the scrollbar in Firefox
    '-ms-overflow-style': 'none', // Hide the scrollbar in IE/Edge
    '&::-webkit-scrollbar': {
        width: '0', // Hide the scrollbar in Webkit (Chrome, Safari, etc.)
    },
   
}));

const Card = ({item}) => {
  return (
    <CardWrapper
        margin="0px 20px"
        borderRadius="12px"
        width="300px"
        color="#333"
        flexDirection="column"
        alignItems="left"
        padding="20px"
    >
      <Name>
        {item?.name} <Position>{item?.position}</Position>
      </Name>
      <Content>
       {item?.content}
      </Content>
    </CardWrapper>
  );
};

export const TestimonialSlider = () => {
  const items = [{ name: "Jack", position: "Ex Blackrock PM", content: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”' }, 
{name:'Yash P', content:"“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”", position: 'Research, 3poch Crypto Hedge Fund'}];

  return (
    <Wrapper > 
    {items.map((item, index) => (
       <Card item={item} key={index}/>
    ))}
  </Wrapper>
  );
};
