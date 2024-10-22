import { styled, Typography } from "@mui/material";

export const EllipsisTypography = styled(Typography)(
  ({ lineClamp }: { lineClamp?: number | undefined }) => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineClamp || 2,
    textOverflow: "ellipsis",
  })
);
