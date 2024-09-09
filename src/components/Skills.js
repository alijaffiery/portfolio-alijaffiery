import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Skills = () => {
  const skills = [
    { name: "React", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML & CSS", level: "Expert" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Redux", level: "Advanced" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#152536",
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        mb={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            animation: `${slideIn} 1s ease-out`,
          }}
        >
          My
        </Typography>
        <Typography
          variant="h3"
          color="#01eeff"
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            animation: `${slideIn} 1s ease-out`,
          }}
        >
          Skills
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                borderRadius: "8px",
                border: "2px solid #01eeff",
                backgroundColor: "#323846",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                },
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: "white" }}>
                {skill.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                {skill.level}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
