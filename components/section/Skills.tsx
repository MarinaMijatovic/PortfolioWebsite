// react
import * as React from "react";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
// custom icons
import IllustratorCCIcon from "components/icon/IllustratorCC";
import LightroomCCIcon from "components/icon/LightroomCC";
import ReactJS from "components/icon/ReactJS";
import Javascript from "components/icon/Javascript";
// context
import ComponentsContext from "context/componentsContext";
import Flutter from "components/icon/Flutter";
import HTML from "components/icon/HTML";
import WordPress from "components/icon/Wordpress";
import Firebase from "components/icon/Firebase";
import Python from "components/icon/Python";
import Cpp from "components/icon/Cpp";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <ReactJS bgColor="white" textColor="tomato" fontSize="large" />,
      title: "ReactJS",
      progressValue: 80,
    },
    {
      Icon: <ReactJS bgColor="white" textColor="tomato" fontSize="large" />,
      title: "NextJs",
      progressValue: 70,
    },
    {
      Icon: (
        <HTML bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: "HTML/CSS",
      progressValue: 90,
    },
    {
      Icon: (
        <Flutter
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "Flutter",
      progressValue: 45,
    },
    {
      Icon: (
        <Javascript
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "Javascript",
      progressValue: 80,
    },
    {
      Icon: (
        <Python
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "Python",
      progressValue: 75,
    },
    {
      Icon: (
        <WordPress
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "Wordpress",
      progressValue: 70,
    },
    {
      Icon: (
        <Firebase
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "Firebase",
      progressValue: 75,
    },
    {
      Icon: (
        <Cpp
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: "C&C++",
      progressValue: 75,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
