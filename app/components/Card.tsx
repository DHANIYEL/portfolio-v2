// components/Card.tsx
"use client";
import { useEffect, useRef } from "react";
import styles from "../assets/styles/enhanced.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  images?: {
    main: string;
  };
  color: string;
  tag: string;
  level: string;
}

const Card = ({
  i,
  title,
  subtitle,
  description,
  images,
  color,
  tag,
  level,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const elements = {
      header: headerRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
      description: descriptionRef.current,
      imageInner: imageInnerRef.current,
    };

    // Check if critical elements exist
    if (
      !elements.imageInner ||
      !elements.header ||
      !elements.title ||
      !elements.description
    ) {
      console.warn("Critical elements not found in card", i);
      return;
    }

    // ✅ Set initial states
    gsap.set(elements.imageInner, {
      clipPath: "inset(0 100% 0 0)",
    });

    const textElements = [
      elements.header,
      elements.title,
      elements.subtitle,
      elements.description,
    ].filter(Boolean);

    gsap.set(textElements, {
      y: 30,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        end: "top -10%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(elements.header, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: "power1.in",
    })
      .to(
        elements.title,
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power1.in",
        },
        0.1,
      )
      .to(
        elements.subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power1.in",
        },
        0.2,
      )
      .to(
        elements.description,
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power1.in",
        },
        0.3,
      )
      .to(
        elements.imageInner,
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 2,
          ease: "none",
        },
        0.4,
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [i]);

  return (
    <div
      ref={cardRef}
      className={styles.cardContainer}
      style={{ "--index": i } as React.CSSProperties}
    >
      <div className={styles.card} style={{ backgroundColor: color }}>
        <div ref={headerRef} className={styles.header}>
          <div className={styles.tag}>
            <span>{tag}</span>
          </div>
          <div className={styles.tag}>
            <span>{level}</span>
          </div>
        </div>

        <h2 ref={titleRef}>{title}</h2>

        <p ref={subtitleRef} style={{ marginTop: "6px", opacity: 0.85 }}>
          {subtitle}
        </p>

        <div className={styles.body}>
          <div ref={descriptionRef} className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <div ref={imageInnerRef} className={styles.inner}>
              <img
                src={images?.main}
                alt={title}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
