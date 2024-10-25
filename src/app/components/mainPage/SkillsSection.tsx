import { skills } from "../../strings";

function SkillsSection() {
  return (
    <div className="mb-6">
      <div>
        <b>Proficiency in:</b>
        {skills.Proficiency}
      </div>
      <div>
        <b>Work experience with:</b>
        {skills.WorkExperience}
      </div>
      <div>
        <b>Familiarity with</b>
        {skills.Familiarity}
      </div>
    </div>
  );
}

export default SkillsSection;
