import s from "./Footer.module.css";
export default function Footer() {
  const date = new Date();
  const anoAtual = date.getFullYear();
  return <footer className={s.footerContainer}>© {anoAtual}</footer>;
}
