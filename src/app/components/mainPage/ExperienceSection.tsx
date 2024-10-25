import { experience } from "../../strings";

function ExperienceSection() {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Experience</h2>
      {experience.map((job, index) => (
        <div className="mb-6" key={index}>
          <h3>
            {job.title} at {job.company}
          </h3>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          <p>
            <strong>Tools Used:</strong> {job.tools}
          </p>
          <ul className="list-disc list-inside text-gray-600">
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
