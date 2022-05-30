export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Css Modules -</p>
        <button className="button">Fight!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px E392eff;
          border-radius: 20px;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};
