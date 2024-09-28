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
          2019-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ py: "12px", px: 2, fontSize: "2rem" }}
          sm={{ py: "12px", px: 2, fontSize: "3rem" }}
          md={{ py: "12px", px: 2, fontSize: "4rem" }}
          lg={{ py: "12px", px: 2, fontSize: "5rem" }}
        >
          <Typography variant="h6" component="span" fontWeight={600}>
            BACHELOR OF TECHNOLOGY
          </Typography>
          <Typography>CGPA: 9</Typography>
          <Typography>Sree Vidyanikethan Engineering College</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2017-2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ py: "12px", px: 2, fontSize: "2rem" }}
          sm={{ py: "12px", px: 2, fontSize: "3rem" }}
          md={{ py: "12px", px: 2, fontSize: "4rem" }}
          lg={{ py: "12px", px: 2, fontSize: "5rem" }}
        >
          <Typography variant="h6" component="span" fontWeight={600}>
            INTERMEDIATE
          </Typography>
          <Typography>CGPA: 10</Typography>
          <Typography>Sri Gayatri Jnr College</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2007-2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ py: "12px", px: 2, fontSize: "2rem" }}
          sm={{ py: "12px", px: 2, fontSize: "3rem" }}
          md={{ py: "12px", px: 2, fontSize: "4rem" }}
          lg={{ py: "12px", px: 2, fontSize: "5rem" }}
        >
          <Typography variant="h6" component="span" fontWeight={600}>
            SCHOOLING
          </Typography>
          <Typography>CGPA: 10</Typography>
          <Typography>V.B.R E.M HIGH SCHOOL</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
