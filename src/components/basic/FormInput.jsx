const FormInput = ({ type, name, onChange,margin,value }) => {
  return (
    <div style={{ ...styles.widget, marginTop: margin }}>
      <input
        style={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={`Enter ${name === "email" ? "username" : "password"}`}
        onChange={onChange}
      />
    </div>
  );
};

const styles = {
  widget: {
    width: "100%",
    padding: "0px 8px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
    backgroundColor: "#ffffff",
    placeholdercolor: "#94a3b8",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "36px",
    outline: "none",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
  },
};

export default FormInput;
