import { Button } from "@mui/material";

export default function CustomButton({ title, size, variant, style, link }) {
  return (
    <Button sx={style} size={size} variant={variant} onClick={link}>
      {title}
    </Button>
  );
}
