// react
import * as React from "react";
// next
import Image from "next/image";
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";
import LinkedInIconLink from "components/common/LinkedInIconLink";
import ContainerGrid from "components/common/ContainerGrid";
import ExpandMoreIconButton from "components/common/ExpandMoreIconButton";
import { LinkedIn } from "@mui/icons-material";
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "21rem",
  [theme.breakpoints.up(350)]: {
    height: "26rem",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    scrollMarginTop: "2rem",
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: "1rem",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    height: "90vh",
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: "100%" }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="Marina Mijatović profile"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/Ja3.jpg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: "2rem", position: "relative" }}
          >
            <Card
              sx={{ boxShadow: "none", height: "100%", position: "relative" }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold">
                A few words about me...
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1">
                  Hello! My name is Marina Mijatović. I came from Novi Sad,
                  small city with big IT potencial, on the north od the Serbia.
                  I started my carrer as a hardware developer, but last few
                  years, I’m giving my best in contributing other people
                  bussiness growth, by providing them beautifull and functional
                  websites.Since a picture is worth a thousand words, lets see
                  some projects.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                ></Collapse>
              </CardContent>
              <Typography component="h2" variant="h5" fontWeight="bold">
                Education & Experience
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1">
                  <i>2010-2014</i> <br />
                  <b>High School `Jovan Jovanović Zmaj`</b> <br />
                  Class for talented students in math gymnasium. Principal
                  skills covered: math, physics, programming and algorithms.
                  <br /> <br />
                  <i>2014-present</i> <br />
                  <b>Faculty of Technical Sciences</b> <br />
                  Faculty department: microcomputer electronics, embedded
                  systems and algorithms
                  <br /> <br />
                  <i>Summer 2017</i> <br />
                  <b>
                    Microsoft Development Center Serbia - Software Developer
                    Engineer Intern
                  </b>
                  <br />
                  Development of new functionalities in SQL server team.
                  <br /> <br />
                  <i>2019 - present</i> <br />
                  <b>
                    Bussines Center for Educational Consulting and Career
                    Development, Novi Sad, Serbia
                    <br/>- CEO
                    <br />- Math & Programming Educator
                    <br/>- Fullstack web developer
                  </b>
                  <br />
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                ></Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: "flex-start",
                    }}
                  />
                )}
                <div>
                  <FacebookIconLink />
                  <InstagramIconLink />
                  <TwitterIconLink />
                  <LinkedInIconLink/>
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
