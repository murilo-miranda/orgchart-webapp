import styles from "./Button.module.css";

export function Button() {
  return(
    <button type="submit" className={styles.button}>
      Cadastrar
    </button>
  )
}
