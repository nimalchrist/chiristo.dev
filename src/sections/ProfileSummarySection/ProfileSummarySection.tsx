import { getProfileSummaryDetails } from "@/data/homePageData";
import getEmailRegex from "@/utils/homePageUtils/getEmailRegex";
import Image from "next/image";
import styles from "./ProfileSummarySection.module.scss";

export default function ProfileSummarySection() {
  const { name, role, summary } = getProfileSummaryDetails();
  const emailRegex = getEmailRegex();
  const parts = summary.split(emailRegex)
  return (
    <section className={styles.profileSummarySection}>
      <div className={styles.profileDetails}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.role}>{role}</p>
        <p className={styles.content}>
          {parts.map((part, i) =>
            emailRegex.test(part) ? (
              <a key={i} href={`mailto:${part}`} className="email-link">
                {part}
              </a>
            ) : (
              part
            )
          )}
        </p>

      </div>
      <div className={styles.profileImageContainer}>
      <Image
        src="/images/chiristo.jpg"
        alt="Profile"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      </div>
    </section>
  );
}
