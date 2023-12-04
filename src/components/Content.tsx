import { ContentWrapper, Flex } from "../StyledItems";
import { Cohort } from "./content/Cohort";
import { NotificationCard } from "./content/NotificationCard";
import Bell from "../assets/images/bell.png";
import { Testimonial } from "./content/Testimonials";
import { CustomCarousel } from "./content/Carousel";

export const Content = () => {
  return (
    <ContentWrapper>
      <Flex margin="5px 0px 0px 10px">
        <NotificationCard
          img={Bell}
          align="left"
          title="Get notified when a highly correlated whale makes a move"
          content=" Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
        />
        <CustomCarousel />
      </Flex>
      <Cohort />
      <Testimonial />
    </ContentWrapper>
  );
};
