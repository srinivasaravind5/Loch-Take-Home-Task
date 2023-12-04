import { styled } from "@mui/material";
import { Flex } from "../../StyledItems";

export const Title = styled("b")(() => ({
  fontWeight: 600,
  fontSize: "29px",
  margin: "5px auto",
  color: "#FFF",
  lineHeight: "34.2px",
}));

export const Content = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "19.2px",
  margin: '5x 0px',
  color: "#F2F2F2 !important",
}));

interface NotificationCardType {
    img?: string;
    align?: string;
    title?: string;
    content?: string;
}

export const NotificationCard: React.FC<NotificationCardType> = ({
  img = null,
  align = "left",
  title = "Get notified when a highly correlated whale makes a move",
  content = " Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
}) => {
  return (
    <Flex
      background="transparent"
      flexDirection="column"
      width="308px"
      margin="0px 10px 0px 30px"
      textAlign={align}
    >
     <img
        src={img}
        style={{
          margin: align === "left" ? "0px auto 0px 0px" : "0px 0px 0px auto",
          height: "24px",
          width: "30px",
        }}
      />

      <Title>{title}</Title>
      <Content>{content}</Content>
    </Flex>
  );
};
