import data from "../data.json";

const Line = (props) => {
  const { searchTerm } = props;
  return (
    <div>
      {searchTerm === "" ? (
        <div>
          {data.slice(0, 20).map((elem, i) => {
            return (
              <ul key={i}>
                <li>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(elem.symbol);
                    }}
                  ></button>
                  {elem.symbol} &nbsp;
                  {elem.title}
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="result">
            {data
              .filter((value) => {
                return value.title.toLowerCase().includes(searchTerm);
              })
              .map((value, i) => {
                return (
                  <ul key={i}>
                    <li>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(value.symbol);
                        }}
                      ></button>
                      {value.symbol} {value.title}
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Line;
