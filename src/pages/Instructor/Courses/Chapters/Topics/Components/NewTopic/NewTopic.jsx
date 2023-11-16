import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add, ArticleOutlined, QuizOutlined } from "@mui/icons-material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "100",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<Add />} {...props} />
))(({ theme }) => ({
  height: "36px",
  minHeight: "auto",
  backgroundColor: theme.palette.primary.dark,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.b1,
}));
export default function NewTopic() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography fontWeight="400">New Topic</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <MenuList disablePadding>
          <MenuItem key="new video">
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText>New Video</ListItemText>
          </MenuItem>
          <MenuItem key="new article">
            <ListItemIcon>
              <ArticleOutlined />
            </ListItemIcon>
            <ListItemText>New Article</ListItemText>
          </MenuItem>
          <MenuItem key="new quiz">
            <ListItemIcon>
              <QuizOutlined />
            </ListItemIcon>
            <ListItemText>New Quiz</ListItemText>
          </MenuItem>
        </MenuList>
      </AccordionDetails>
    </Accordion>
  );
}
