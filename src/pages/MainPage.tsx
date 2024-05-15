import { ProjectCard } from "../components/ProjectCard";
import { ProjectStack } from "../components/ProjectStack";
import imgPath from "../assets/project-card-image.jpg";
import newImagePath from "../assets/v47-chingu-tier1.png";

export function MainPage() {
  return (
    <div className="flex-grow w-3/4 m-auto">
      {/* database */}
      {/* java */}
      {/* web dev  */}
      {/* data science */}
      <ProjectStack>
        <ProjectCard header="heading1" imgPath={imgPath} />
        <ProjectCard
          header="Chingu - Daily Tasker"
          imgPath={newImagePath}
          github={""}
          live={""}
        />
        <ProjectCard header="heading3" imgPath={imgPath} />
      </ProjectStack>
    </div>
  );
}
