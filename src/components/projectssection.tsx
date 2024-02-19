export function ProjectsSections() {
  return (
    <div className="text-center">
      <h1 className="text-strokehigh">Projects</h1>
      <p className="text-primary font-medium text-2xl mt-2">
        Take a look at my highlighted projects
      </p>

      <div className="grid grid-cols-3 border border-b w-[1216px] h-[344px] flex items-center justify-center text-center mt-10">
        <div>
          <p className="text-secondary">date and icons</p>
          <p className="text-primary">project name</p>
          <p className="text-primary">content</p>
        </div>
        <div>
          <p className="text-secondary">date and icons</p>
          <p className="text-primary">project name</p>
          <p className="text-primary">content</p>
        </div>
        <div>
          <p className="text-secondary">date and icons</p>
          <p className="text-primary">project name</p>
          <p className="text-primary">content</p>
        </div>
      </div>
    </div>
  );
}