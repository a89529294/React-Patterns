export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props) => <Button {...props} color="red" />;

export const BigSuccesButton = (props) => (
  <Button {...props} color="green" size="large" />
);

//alternatively, DangerButton is the same as DangerButton2
export const partiallyApply = (Component, partialProps) => {
  return (props) => <Component {...partialProps} {...props} />;
};

export const DangerButton2 = partiallyApply(Button, { color: "red" });
