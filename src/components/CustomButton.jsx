import { Button } from "@mui/material";

export default function CustomButton({
  title,
  size,
  disabled,
  variant,
  style,
  link,
}) {
  return (
    <Button
      disabled={disabled}
      sx={style}
      size={size}
      variant={variant}
      onClick={link}
    >
      {title}
    </Button>
  );
}
