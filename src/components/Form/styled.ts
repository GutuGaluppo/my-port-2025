import { Button, Card, styled } from "@mui/material";

export const FormCard = styled(Card)({
  borderRadius: "16px",
  border: `1px solid #e1cc8f`,
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
});

export const ContactForm = styled("form")({
  width: "min(50vw, 720px)",
  maxWidth: "100%",
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: "50px",
  textTransform: "none",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(25, 118, 210, 0.3)",
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));
