import React from "react";
import { Box, Typography } from "@mui/material";
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

const scaleUp = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#323846",
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
            mb: 2,
            fontWeight: "bold",
            textAlign: "center",
            animation: `${scaleUp} 1s ease-out`,
          }}
        >
          About
        </Typography>
        <Typography
          variant="h3"
          color="#01eeff"
          sx={{
            mb: 2,
            fontWeight: "bold",
            textAlign: "center",
            animation: `${scaleUp} 1s ease-out`,
          }}
        >
          Me
        </Typography>
      </Box>

      <Typography
        variant="h5"
        color="white"
        sx={{
          mb: 4,
          fontWeight: "medium",
          textAlign: "center",
        }}
      >
        Why Choose Me?
      </Typography>
      <Typography
        variant="body1"
        color="white"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.6,
          animation: `${fadeIn} 1.5s ease-out`,
        }}
      >
        Passionate and skilled React Developer with expertise in building
        dynamic and responsive web applications. Proficient in JavaScript,
        React, and modern frontend technologies. Dedicated to creating
        user-friendly interfaces and enhancing user experience. Always eager to
        learn new skills and stay updated with the latest industry trends.
      </Typography>

      <Box
        display="flex"
        mt={7}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          color="#01eeff"
          sx={{
            textAlign: "left",
            maxWidth: "800px",
            lineHeight: 1.6,
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          Here are few highlights:
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            textAlign: "left",
            maxWidth: "800px",
            lineHeight: 1.6,
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          <ul>
            <li> Frontend Development </li>
            <li> React jsJavaScript, Redux, HTML, CSS </li>
            <li> Nodejs, Express js, MongoDB </li>
            <li> Shopify, Polaris Hands-on experience with </li>
            <li> GraphQL </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
