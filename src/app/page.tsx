import EducationSection from '@/sections/EducationSection/EducationSection';
import ProfileSummarySection from '@/sections/ProfileSummarySection/ProfileSummarySection';
import ProjectsSection from '@/sections/ProjectsSection/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection/SkillsSection';

export default function Home() {
  return (
    <main>
      <ProfileSummarySection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      {/* In future the Blogs section will be updated */}
      {/* <section>Blogs section</section> */}
    </main>
  );
}
