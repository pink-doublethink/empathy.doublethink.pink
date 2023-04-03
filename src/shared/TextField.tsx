import MaterialTextField from "@material-ui/core/TextField";

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