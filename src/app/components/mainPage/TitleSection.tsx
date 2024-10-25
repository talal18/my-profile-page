import { title } from "../../strings";

function TitleSection() {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-black-700">{title.name}</h2>
      <h2 className="text-2xl font-semibold text-red-700">{title.title}</h2>
      <h2 className="text-2xl font-semibold text-gray-700">{title.subTitle}</h2>
    </div>
  );
}

export default TitleSection;
