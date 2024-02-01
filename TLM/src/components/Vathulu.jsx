import React from "react";
import Vathuluprop from "./Vathuluprop";

function Vathulu() {
  const unicodeValues = ["\u0C15", "\u0C16", "\u0C17", "\u0C18", "\u0C19"];
  const r1 = ["\u0C1A", "\u0C1B", "\u0C1C", "\u0C1D", "\u0C1E"];
  const r2 = ["\u0C1F", "\u0C20", "\u0C21", "\u0C22", "\u0C23"];
  const r3 = ["\u0C24", "\u0C25", "\u0C26", "\u0C27", "\u0C28"];
  const r4 = ["\u0C2A", "\u0C2B", "\u0C2C", "\u0C2D", "\u0C2E"];
  const r5 = ["\u0C2F", "\u0C30", "\u0C32", "\u0C35"];
  const r6 = ["\u0C36", "\u0C37", "\u0C38", "\u0C39", "\u0C33"];


  return (
    <div>
      <h1>Wattles</h1>
      <Vathuluprop unicodeValues={unicodeValues} />
      <Vathuluprop unicodeValues={r1} />
      <Vathuluprop unicodeValues={r2} />
      <Vathuluprop unicodeValues={r3} />
      <Vathuluprop unicodeValues={r4} />
      <Vathuluprop unicodeValues={r5} />
      <Vathuluprop unicodeValues={r6} />
    </div>
  );
}

export default Vathulu;

// import React from "react";
// import "../styles/Vathulu.css";

// function Vathulu() {
//   return (
//     <div>
//       <div className="v1">
//         <div className="k">
//           <div className="r1">{"\u0C15"}</div>
//           <div className="r1">{"\u0C15\u0C3E"}</div>
//           <div className="r1">{"\u0C15\u0C3F"}</div>
//           <div className="r1">{"\u0C15\u0C40"}</div>
//           <div className="r1">{"\u0C15\u0C41"}</div>
//           <div className="r1">{"\u0C15\u0C42"}</div>
//           <div className="r1">{"\u0C15\u0C43"}</div>
//           <div className="r1">{"\u0C15\u0C44"}</div>
//           <div className="r1">{"\u0C15\u0C62"}</div>
//           <div className="r1">{"\u0C15\u0C63"}</div>
//           <div className="r1">{"\u0C15\u0C46"}</div>
//           <div className="r1">{"\u0C15\u0C47"}</div>
//           <div className="r1">{"\u0C15\u0C48"}</div>
//           <div className="r1">{"\u0C15\u0C4A"}</div>
//           <div className="r1">{"\u0C15\u0C4B"}</div>
//           <div className="r1">{"\u0C15\u0C4C"}</div>
//           <div className="r1">{"\u0C15\u0C02"}</div>
//           <div className="r1">{"\u0C15\u0C03"}</div>
//         </div>

//         <div className="k">
//           <div className="r1">{"\u0C16"}</div>
//           <div className="r1">{"\u0C16\u0C3E"}</div>
//           <div className="r1">{"\u0C16\u0C3F"}</div>
//           <div className="r1">{"\u0C16\u0C40"}</div>
//           <div className="r1">{"\u0C16\u0C41"}</div>
//           <div className="r1">{"\u0C16\u0C42"}</div>
//           <div className="r1">{"\u0C16\u0C43"}</div>
//           <div className="r1">{"\u0C16\u0C44"}</div>
//           <div className="r1">{"\u0C16\u0C62"}</div>
//           <div className="r1">{"\u0C16\u0C63"}</div>
//           <div className="r1">{"\u0C16\u0C46"}</div>
//           <div className="r1">{"\u0C16\u0C47"}</div>
//           <div className="r1">{"\u0C16\u0C48"}</div>
//           <div className="r1">{"\u0C16\u0C4A"}</div>
//           <div className="r1">{"\u0C16\u0C4B"}</div>
//           <div className="r1">{"\u0C16\u0C4C"}</div>
//           <div className="r1">{"\u0C16\u0C02"}</div>
//           <div className="r1">{"\u0C16\u0C03"}</div>
//         </div>
//         <div className="k">
//           <div className="r1">{"\u0C17"}</div>
//           <div className="r1">{"\u0C17\u0C3E"}</div>
//           <div className="r1">{"\u0C17\u0C3F"}</div>
//           <div className="r1">{"\u0C17\u0C40"}</div>
//           <div className="r1">{"\u0C17\u0C41"}</div>
//           <div className="r1">{"\u0C17\u0C42"}</div>
//           <div className="r1">{"\u0C17\u0C43"}</div>
//           <div className="r1">{"\u0C17\u0C44"}</div>
//           <div className="r1">{"\u0C17\u0C62"}</div>
//           <div className="r1">{"\u0C17\u0C63"}</div>
//           <div className="r1">{"\u0C17\u0C46"}</div>
//           <div className="r1">{"\u0C17\u0C47"}</div>
//           <div className="r1">{"\u0C17\u0C48"}</div>
//           <div className="r1">{"\u0C17\u0C4A"}</div>
//           <div className="r1">{"\u0C17\u0C4B"}</div>
//           <div className="r1">{"\u0C17\u0C4C"}</div>
//           <div className="r1">{"\u0C17\u0C02"}</div>
//           <div className="r1">{"\u0C17\u0C03"}</div>
//         </div>
//         <div className="k">
//           <div className="r1">{"\u0C18"}</div>
//           <div className="r1">{"\u0C18\u0C3E"}</div>
//           <div className="r1">{"\u0C18\u0C3F"}</div>
//           <div className="r1">{"\u0C18\u0C40"}</div>
//           <div className="r1">{"\u0C18\u0C41"}</div>
//           <div className="r1">{"\u0C18\u0C42"}</div>
//           <div className="r1">{"\u0C18\u0C43"}</div>
//           <div className="r1">{"\u0C18\u0C44"}</div>
//           <div className="r1">{"\u0C18\u0C62"}</div>
//           <div className="r1">{"\u0C18\u0C63"}</div>
//           <div className="r1">{"\u0C18\u0C46"}</div>
//           <div className="r1">{"\u0C18\u0C47"}</div>
//           <div className="r1">{"\u0C18\u0C48"}</div>
//           <div className="r1">{"\u0C18\u0C4A"}</div>
//           <div className="r1">{"\u0C18\u0C4B"}</div>
//           <div className="r1">{"\u0C18\u0C4C"}</div>
//           <div className="r1">{"\u0C18\u0C02"}</div>
//           <div className="r1">{"\u0C18\u0C03"}</div>
//         </div>
//         <div className="k">
//           <div className="r1">{"\u0C19"}</div>
//           <div className="r1">{"\u0C19\u0C3E"}</div>
//           <div className="r1">{"\u0C19\u0C3F"}</div>
//           <div className="r1">{"\u0C19\u0C40"}</div>
//           <div className="r1">{"\u0C19\u0C41"}</div>
//           <div className="r1">{"\u0C19\u0C42"}</div>
//           <div className="r1">{"\u0C19\u0C43"}</div>
//           <div className="r1">{"\u0C19\u0C44"}</div>
//           <div className="r1">{"\u0C19\u0C62"}</div>
//           <div className="r1">{"\u0C19\u0C63"}</div>
//           <div className="r1">{"\u0C19\u0C46"}</div>
//           <div className="r1">{"\u0C19\u0C47"}</div>
//           <div className="r1">{"\u0C19\u0C48"}</div>
//           <div className="r1">{"\u0C19\u0C4A"}</div>
//           <div className="r1">{"\u0C19\u0C4B"}</div>
//           <div className="r1">{"\u0C19\u0C4C"}</div>
//           <div className="r1">{"\u0C19\u0C02"}</div>
//           <div className="r1">{"\u0C19\u0C03"}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Vathulu;
