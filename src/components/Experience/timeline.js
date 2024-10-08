import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Nov 2023-Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, fontSize: "4rem" }}>
          <Typography variant="h6" component="span" color="black">
            Software QA Test Engineer
          </Typography>
          <Typography color="black">NVIDIA</Typography>
          <Typography color="black">Tech: Linux, Python</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Jan 2023-Jul 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, fontSize: "4rem" }}>
          <Typography variant="h6" component="span" color="black">
            Technology Analyst Intern
          </Typography>
          <Typography color="black" >Morgan Stanley</Typography>
          <Typography color="black">Tech: Angular, Typescript, Jest, SCSS, HTML, ASP.NET</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Oct 2022- Dec 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, fontSize: "4rem" }}>
          <Typography variant="h6" component="span" color="black">
            Project Trainee
          </Typography>
          <Typography color="black">ZOHO</Typography>
          <Typography color="black">Tech: SprintBoot, Java</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
