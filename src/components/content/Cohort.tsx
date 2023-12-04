import { Flex } from "../../StyledItems";
import Eye from "../../assets/images/eye.png";
import CohortImg from "../../assets/images/Cohorts.png";
import { NotificationCard } from "./NotificationCard";

export const Content = () => {
  return <></>;
};
export const Cohort = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" margin="20px 40px 20px 0px">
        <img src={CohortImg} height={'290px'} width={'410px'} style={{objectFit:'cover'}}  alt="Cohort img" />
      <NotificationCard
        img={Eye}
        align="right"
        title="Watch what the whales are doing"
        content="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
      />
    </Flex>
  );
};
