import MaterialTextField from "@mui/material/TextField";

const TextField: React.FC = ({ input, className, label, variant }) => {
  return (
    <MaterialTextField
      {...input}
      className={className}
      label={label}
      variant={variant}
    />
  );
};

export default TextField;