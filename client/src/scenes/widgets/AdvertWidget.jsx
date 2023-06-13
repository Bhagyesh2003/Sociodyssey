import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import React from "react";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={medium}>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
       width="100%"
       height="auto"
       alt="advert"
       src="http://localhost:3001/assets/advert1.jpg"
       style={{ borderRadius: "0.75rem", margin: "0.75 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Apple Vision Pro</Typography>
        <Typography color={main}>www.apple.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Apple Vision Pro seamlessly blends digital content with your physical space.
      </Typography>
    </WidgetWrapper>
  )
}

export default AdvertWidget;