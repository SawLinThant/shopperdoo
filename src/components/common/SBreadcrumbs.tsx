import { Breadcrumbs, Button, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface SBreadcrumbsProps {
  crumbs: Array<{ text: string; href?: string | undefined }>;
  children?: React.ReactNode | undefined;
  enableMobile?: boolean | undefined;
}

const SBreadcrumbs = ({
  children,
  crumbs,
  enableMobile = false,
}: SBreadcrumbsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        size="small"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate(-1);
        }}
        sx={{
          display: enableMobile
            ? {
                xs: "flex",
                md: "none",
              }
            : "none",
          justifyContent: "flex-start",
        }}
      >
        Back
      </Button>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{
          display: enableMobile
            ? {
                xs: "none",
                md: "flex",
              }
            : {},
        }}
      >
        {children ||
          crumbs.map(({ text, href }) => {
            return (
              <Typography
                key={href}
                sx={{
                  color: href ? "" : "text.primary",
                  "&:hover": href
                    ? {
                        textDecoration: "underline",
                        cursor: "pointer",
                      }
                    : {},
                }}
                onClick={() => href && navigate(href)}
              >
                {text}
              </Typography>
            );
          })}
      </Breadcrumbs>
    </>
  );
};

export default SBreadcrumbs;
