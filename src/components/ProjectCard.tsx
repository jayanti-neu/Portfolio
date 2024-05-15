export function ProjectCard(props: any) {
  const { header, imgPath } = props;

  return (
    <div className="flex flex-col border-2">
      <img src={imgPath} alt="link to live website" width={1000} />
      <h2>{header}</h2>
      <p>Project Description</p>
    </div>
  );
}
