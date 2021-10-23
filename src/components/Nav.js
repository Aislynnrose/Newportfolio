import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import me from "./me.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Forager from "./Forager.PNG";
import Day from "./MakeMyDay.PNG";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <h1>Aislynn Uribe</h1>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Portfolio" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>
          Welcome to my lair! My name is Aislynn - pronounced azlin.
          <br />I am a web developer and chaos coordinator (sometimes both at
          the same time!).
        </h1>
        <img className="photo" src={me} alt="selfie" />
        <p>
          I completed school to build my education in coding on October 11, 2021
          with a full stack developer certificate. In my spare time I enjoy
          swimming and getting out in nature to reset and ground myself. I
          believe camping is the best solution for most problems in life. Things
          I love most about coding would be the creative freedom as well as the
          logic based aspect of the code. I enjoy the challenges I have to
          overcome and Google has become an amazing help for finding my own
          solutions. I am currently familiar with HTML, CSS, JavaScript,
          Node.js, Handlebars, MySQL and MongoDB. I look forward to learing
          additional languages over time.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img
          className="portfolioPhoto"
          src={Day}
          alt="Make My Day application"
        />
        <p>
          This application will make you smile. Select from quotes, gifs and
          images to see a fun selection.
          <br />
          <a href="https://github.com/Aislynnrose/Make-my-day-project">
            View the repo
          </a>
        </p>
        <br />
        <br />
        <img
          className="portfolioPhoto"
          src={Forager}
          alt="Kitchen Forager Application"
        />
        <p>
          This application is there for those days you need to make dinner but
          don't know what to make with the supplies you have.
          <br />
          <a href="https://github.com/Aislynnrose/kitchenForager">
            View the repo
          </a>
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <a href="mailto:aislynn.rose@gmail.com">
          <EmailOutlinedIcon fontSize="large" />
          Email Me
        </a>
        <br />
        <br />
        <a href="#:720-434-6177">
          <PhoneIphoneOutlinedIcon fontSize="large" />
          Call Me
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/aislynnrose/">
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://github.com/Aislynnrose">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>
      </TabPanel>
    </Box>
  );
}
