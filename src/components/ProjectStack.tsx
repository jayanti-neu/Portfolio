export function ProjectStack(props: any) {
  return (
    <div className="flex flex-row gap-10">
      {props.children.map((child: any, index: number) => {
        return (
          <div className="border-4 border-gray-300" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
