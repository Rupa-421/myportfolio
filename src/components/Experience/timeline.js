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
          <Typography variant="h6" component="span" color="#e34fbe">
            Software QA Test Engineer
          </Typography>
          <Typography color="#e34fbe">NVIDIA</Typography>
          <Typography color="#e34fbe">Tech: Linux, Python</Typography>
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
          <Typography variant="h6" component="span" color="#e34fbe">
            Technology Analyst Intern
          </Typography>
          <Typography color="#e34fbe" >Morgan Stanley</Typography>
          <Typography color="#e34fbe">Tech: Angular, Typescript, Jest, SCSS, HTML, ASP.NET</Typography>
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
          <Typography variant="h6" component="span" color="#e34fbe">
            Project Trainee
          </Typography>
          <Typography color="#e34fbe">ZOHO</Typography>
          <Typography color="#e34fbe">Tech: SprintBoot, Java</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
