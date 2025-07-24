import styles from "./FormField.module.css";

export function FormField({ label, id, type = "text", value, onChange, accept }) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id}
        value={type !== "file" ? value : undefined}
        onChange={onChange}
        accept={accept}
        className={styles.input}
      />
    </>
  );
}
