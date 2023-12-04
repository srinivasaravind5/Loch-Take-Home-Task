import { styled } from "@mui/material";

export const Flex = styled('div')(({
    borderRadius = "0px",
    textAlign = "left",
    background = "none",
    height = "auto",
    flexDirection = 'row',
    margin = "0px",
    padding = "0px",
    justifyContent = 'space-between',
    width = "auto",
    alignItems = "center",
    color = "#FFF"
} = {}) => ({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    height,
    width,
    margin,
    padding,
    color,
    background,
    borderRadius,
    textAlign,
    overflowX: 'scroll',
   
}));

export const ContentWrapper = styled('div')(({})=>({
    backgroundRepeat:'no-repeat',
    color: '#FFF',
    background: 'radial-gradient(95.84% 90.84% at 18.27% 82.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, #111 100%)',
    width: '60% !important',
    height:'94vh',
    justifyContent: 'center',
    padding:'40px 20px 10px 40px',
    '@media (max-height: 750px)': {
        height: '120vh',
        paddingTop:'150px'
    },
}));