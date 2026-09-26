import { FAQ } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { FaqItem } from "./FaqItem";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <h2 id="faq-title" className={`t-h2 ${styles.title}`}>
          {FAQ.title}
        </h2>
        <Reveal className={styles.list} threshold={0.5}>
          {FAQ.items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
