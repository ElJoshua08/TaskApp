import "./NoTask.css"

const NoTask = () => {
  return (
    <div className="noTask">
      <h1>
        You <strong>{" haven't "}</strong>
        created any task yet!
      </h1>
    </div>
  );
};

export { NoTask };
