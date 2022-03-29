import { useSelector } from "react-redux";
import { ProgressSpinner } from "primereact/progressspinner";
import NumberFormat from "react-number-format";
import moment from "moment";

function DataCard() {
  const status = useSelector((state) => state.covid.status);
  const values = useSelector((state) => state.covid.values);

  return (
    <div className="container mt-6">
      <div className="grid justify-content-around">
        <div
          className="col-fixed bg-blue-100 border-round shadow-5"
          style={{ width: "250px", borderBottom: "10px solid #566AFE" }}
        >
          {status === "loading" ? (
            <div className="p-7">
              <ProgressSpinner />
            </div>
          ) : (
            <div className="container word-wrap">
              <div className="font-semibold mt-3">Infected</div>
              <div className="mt-2 text-2xl">
                {status === "succeeded" ? (
                  <NumberFormat
                    value={values.confirmed.value}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  0
                )}
              </div>
              <div>Last Updated at :</div>
              <div className="text-sm font-light w-2">
                {status === "succeeded"
                  ? moment(`${values.lastUpdate}`).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )
                  : 0}
              </div>
              <div className="text-sm mb-4">
                Number of infect cases of <br />
                <span>COVID-19</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="col-fixed bg-green-100 border-round shadow-5"
          style={{ width: "250px", borderBottom: "10px solid #6EFA70" }}
        >
          {status === "loading" ? (
            <div className="p-7">
              <ProgressSpinner />
            </div>
          ) : (
            <div className="container word-wrap">
              <div className="font-semibold mt-3">Recovered</div>
              <div className="mt-2 text-2xl">
                {status === "succeeded" ? (
                  <NumberFormat
                    value={values.recovered.value}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  0
                )}
              </div>
              <div>Last Updated at :</div>
              <div className="text-sm font-light w-2">
                {status === "succeeded"
                  ? moment(`${values.lastUpdate}`).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )
                  : 0}
              </div>
              <div className="text-sm mb-4">
                Number of recoveries from <br />
                <span>COVID-19</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="col-fixed bg-pink-100 border-round shadow-5"
          style={{ width: "250px", borderBottom: "10px solid #F86B6A" }}
        >
          {status === "loading" ? (
            <div className="p-7">
              <ProgressSpinner />
            </div>
          ) : (
            <div className="container word-wrap">
              <div className="font-semibold mt-3">Deaths</div>
              <div className="mt-2 text-2xl">
                {status === "succeeded" ? (
                  <NumberFormat
                    value={values.deaths.value}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  0
                )}
              </div>
              <div>Last Updated at :</div>
              <div className="text-sm font-light w-2">
                {status === "succeeded"
                  ? moment(`${values.lastUpdate}`).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )
                  : 0}
              </div>
              <div className="text-sm mb-4">
                Number of deaths caused by <br />
                <span>COVID-19</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="col-fixed bg-yellow-100 border-round shadow-5"
          style={{ width: "250px", borderBottom: "10px solid #F2E564" }}
        >
          {status === "loading" ? (
            <div className="p-7">
              <ProgressSpinner />
            </div>
          ) : (
            <div className="container word-wrap">
              <div className="font-semibold mt-3">Active</div>
              <div className="mt-2 text-2xl">
                {status === "succeeded" ? (
                  <NumberFormat
                    value={values.confirmed.value - values.deaths.value}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  0
                )}
              </div>
              <div>Last Updated at :</div>
              <div className="text-sm font-light w-2">
                {status === "succeeded"
                  ? moment(`${values.lastUpdate}`).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )
                  : 0}
              </div>
              <div className="text-sm mb-4">
                Number of active cases of <br />
                <span>COVID-19</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataCard;
