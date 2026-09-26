"use client";

import { useId, useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";
import styles from "./Faq.module.css";

type Props = { question: string; answer: string };

/** One independently expandable question (Framer "FAQ" component). */
export function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const Icon = open ? MinusIcon : PlusIcon;

  return (
    <div className={styles.item} data-open={open}>
      <h3 className={styles.heading}>
        <button
          type="button"
          className={styles.question}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`t-body ${styles.questionText}`}>{question}</span>
          <Icon className={styles.icon} />
        </button>
      </h3>
      <div id={id} className={styles.answer} role="region" aria-hidden={!open}>
        <div className={styles.answerInner}>
          <p className={`t-body ${styles.answerText}`}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
