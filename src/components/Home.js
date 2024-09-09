import React, { useEffect, useState } from "react";
import { IconButton, Typography, Box, Grid, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfilePic from "../profile.jpeg";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Resume from "../resume/AliJaffiery_Resume.pdf";

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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Home = () => {
  const [role, setRole] = useState("Frontend Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Frontend Developer"
          ? "React Developer"
          : "Frontend Developer"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          flexDirection: "column",
          backgroundColor: "#152536",
          p: 4,
          overflow: "hidden",
          mt: { xs: "40px", md: "60px" },    
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            textAlign: { xs: "center", md: "center" },
            mt: { xs: "0px", md: "0px" },
            px: { xs: "20px", md: "40px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="#152536"
          >
            <Box
              display="flex"
              justifyContent="center"
              mb={2}
              backgroundColor="#152536"
            >
              <IconButton
                onClick={() => window.open("https://www.facebook.com/ali.jaffiery.94", "_blank")}
                sx={{
                  color: "#01eeff",
                  borderRadius: "50%",
                  border: "2px solid #01eeff",
                  "&:hover": { color: "#4267B2" },
                  transition: "color 0.3s ease",
                  mx: 1,
                  animation: `${fadeIn} 1.5s ease-out`,
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton 
                onClick={() => window.open("https://www.instagram.com/alijaffiery/", "_blank")}
                sx={{
                  color: "#01eeff",
                  borderRadius: "50%",
                  border: "2px solid #01eeff",
                  "&:hover": { color: "#E4405F" },
                  transition: "color 0.3s ease",
                  mx: 1,
                  animation: `${fadeIn} 1.5s ease-out 0.2s`,
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => window.open("https://www.linkedin.com/in/ali-jaffiery-08991a214", "_blank")}
                sx={{
                  color: "#01eeff",
                  borderRadius: "50%",
                  border: "2px solid #01eeff",
                  "&:hover": { color: "#0A66C2" },
                  transition: "color 0.3s ease",
                  mx: 1,
                  animation: `${fadeIn} 1.5s ease-out 0.4s`,
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
              onClick={() => window.open(" https://github.com/alijaffiery", "_blank")}
              sx={{
                  color: "#01eeff",
                  borderRadius: "50%",
                  border: "2px solid #01eeff",
                  "&:hover": { color: "#171515" },
                  transition: "color 0.3s ease",
                  mx: 1,
                  animation: `${fadeIn} 1.5s ease-out 0.6s`,
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              color="white"
              sx={{ animation: `${fadeIn} 1s ease-out` }}
            >
              Hello, It's Me
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              color="white"
              sx={{ animation: `${fadeIn} 1s ease-out` }}
            >
              Ali Jaffiery
            </Typography>
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
                variant="h6"
                color="white"
                sx={{ animation: `${fadeIn} 1s ease-out 0.2s` }}
              >
                And I'm a
              </Typography>
              <Typography
                variant="h6"
                color="#01eeff"
                sx={{ animation: `${fadeIn} 1s ease-out 0.2s` }}
              >
                {role}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="white"
              sx={{
                marginTop: "10px",
                animation: `${fadeIn} 1s ease-out 0.4s`,
                display: { xs: "block", md: "block" },
                maxWidth: "80%",
                mx: "auto",
                mb: { xs: "40px", md: "60px" },
              }}
            >
              Knack of building applications with front and backend operations.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              mb={2}
              sx={{
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
              <Link to="contact" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  color="white"
                  sx={{
                    mt: 2,
                    width: { xs: "100%", md: "auto" },
                    backgroundColor: "#01eeff",
                  }}
                >
                  Hire Me
                </Button>
              </Link>

              <Button
                variant="contained"
                color="white"
                sx={{
                  mt: 2,
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#01eeff",
                }}
                component="a"
                href={Resume}
                download="Ali_Jaffiery_Resume.pdf"
              >
                Get Resume
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src={ProfilePic}
              alt="Profile"
              sx={{
                width: "450px",
                height: "450px",
                borderRadius: "50%",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
                objectFit: "cover",
                transition:
                  "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.8)",
                  transform: "scale(1.05)",
                },
                animation: `${bounce} 2s infinite`,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
