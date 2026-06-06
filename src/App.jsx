import { useState, useRef, useEffect } from "react";
import {
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  ReceiptIcon,
} from "./icons/Icons";
import { ChevronDown } from "lucide-react";

 const teams = [
   {
     name: "Nuovas Team",
     accNum: [
       { name: "Natnael Haile Gebreslasie", acc: "76345507" },
       { name: "Fillimon Teklay", acc: "11733177" },
       { name: "Samson Gidey Beyene", acc: "01366152" },
       { name: "Mr Biniyam Surafel Gerensea", acc: "60052357" },
     ],
   },
   {
     name: "Coffee Team",
     accNum: [
       { name: "Ermias Gebreslase", acc: "85334628" },
       { name: "BIRUKTAREKE GEBREMICHAEL", acc: "11497889" },
       { name: "Mussie Gebremicheal Bahta", acc: "18462905" },
       { name: "Hanibal teklay brhane", acc: "96534431" },
     ],
   },
 ];

export default function App() {
  const [ft, setFt] = useState("");
  const [selectedAcc, setSelectedAcc] = useState("");
  const [acc, setAcc] = useState("");
  const [copied, setCopied] = useState(false);
  const [lastUrl, setLastUrl] = useState("");
  const [verified, setVerified] = useState(false);
  const [openTeam, setOpenTeam] = useState("Nuovas Team");
  const accRef = useRef(null);

  const cleanFt = ft.trim().replace(/\s+/g, "").toUpperCase();
  const cleanAcc = selectedAcc !== "" ? selectedAcc : acc.trim().replace(/\D/g, "");
  const isValid = cleanFt.length === 12 && (cleanAcc.length === 8 || selectedAcc);
  const builtUrl = isValid
    ? `https://apps.cbe.com.et:100/?id=${cleanFt}${cleanAcc}`
    : "";

  function handleVerify() {
    const url = builtUrl;
    setLastUrl(url);
    setVerified(true);
    window.open(url, "_blank");
  }

  function handleCopy() {
    navigator.clipboard.writeText(lastUrl || builtUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleFtKeyDown(e) {
    if (e.key === "Enter") accRef.current?.focus();
  }

  function handleAccKeyDown(e) {
    if (e.key === "Enter" && isValid) handleVerify();
  }
  
  useEffect(()=>(
    console.log(openTeam)
    
  ),[openTeam])

  return (
    <section className="w-full min-h-screen bg-[#f0f7f4] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 px-1 ml-5 my-10">
        <div className="w-11 h-11 rounded-xl bg-cbe-600 flex items-center justify-center text-cbe-50 shadow-sm">
          <ReceiptIcon />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-cbe-900 leading-tight">
            CBE Receipt Verifier
          </h1>
          <p className="text-sm text-cbe-600">Commercial Bank of Ethiopia</p>
        </div>
      </div>
      <div className=" flex max-sm:flex-col-reverse items-center justify-center gap-5 p-4 mb-20">
        <div className="w-full max-w-md">
          <h1 className="p-3 text-lg font-bold text-green-700">
            Verify Your Receipt Here.
          </h1>
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-cbe-100 overflow-hidden">
            {/* Green accent top bar */}
            <div className="h-1 bg-gradient-to-r from-cbe-500 to-cbe-200" />

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-6">
                Enter the FT number and the last 8 digits of the account number
                to verify a receipt.
              </p>

              {/* FT Number */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                  FT Number
                </label>
                <input
                  type="text"
                  value={ft}
                  onChange={(e) => {
                    setFt(e.target.value);
                    setVerified(false);
                  }}
                  onKeyDown={handleFtKeyDown}
                  placeholder="e.g. FT260886R92Z"
                  spellCheck={false}
                  maxLength={12}
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] font-mono bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cbe-500 focus:border-transparent transition-all placeholder-gray-300 text-gray-800"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  {cleanFt.length}/12 digits entered
                </p>
              </div>

              {/* Account Number */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                  Last 8 digits of account number
                </label>
                <input
                  ref={accRef}
                  type="text"
                  value={selectedAcc !== "" ? selectedAcc : acc}
                  onChange={(e) => {
                    setAcc(e.target.value);
                    setVerified(false);
                    setSelectedAcc("");
                  }}
                  onKeyDown={handleAccKeyDown}
                  placeholder="e.g. 76345507"
                  maxLength={8}
                  spellCheck={false}
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] font-mono bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cbe-500 focus:border-transparent transition-all placeholder-gray-300 text-gray-800"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  {cleanAcc.length}/8 digits entered
                </p>
              </div>

              {/* URL preview */}
              {isValid && (
                <div className="mb-5 rounded-xl bg-cbe-50 border border-cbe-100 p-3">
                  <p className="text-[10px] font-semibold text-cbe-600 uppercase tracking-widest mb-1">
                    Preview URL
                  </p>
                  <p className="text-xs font-mono text-cbe-700 break-all leading-relaxed">
                    <span className="text-gray-400">
                      https://apps.cbe.com.et:100/?id=
                    </span>
                    <span className="text-cbe-600 font-semibold">
                      {cleanFt}
                    </span>
                    <span className="text-cbe-900 font-semibold">
                      {cleanAcc}
                    </span>
                  </p>
                </div>
              )}

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={!isValid}
                className={`w-full py-3.5 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 transition-all
                ${
                  isValid
                    ? "bg-cbe-600 hover:bg-cbe-700 active:scale-[0.98] text-white shadow-sm cursor-pointer"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                <ExternalLinkIcon />
                {verified ? "Verify again" : "Verify receipt"}
              </button>

              {/* Copy URL */}
              {(verified || isValid) && (
                <button
                  onClick={handleCopy}
                  className="w-full mt-2.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 active:scale-[0.98] transition-all"
                >
                  {copied ? (
                    <>
                      <CheckIcon />
                      <span className="text-cbe-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon /> Copy URL
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <p className="flex flex-col text-center text-xs text-gray-400 mt-4 gap-2">
            Opens the CBE receipt page in a new tab
            <span>Created By Axon Tech.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          {teams.map((team) => (
            <div
              key={team.name}
              className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-cbe-100 px-5 py-2 gap-3 max-sm:my-2 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenTeam(openTeam === team.name ? null : team.name)
                }
                className="w-full flex justify-between items-center gap-3"
              >
                <h3 className="text-lg font-bold text-green-600">
                  {team.name} Acc Num's
                </h3>
                <ChevronDown
                  className={`text-green-600 transition-transform duration-200 ${
                    openTeam === team.name ? "rotate-0" : "-rotate-90"
                  }`}
                  absoluteStrokeWidth
                />
              </button>

              {
                openTeam === team.name ? 
                  <div className="flex flex-col">
                {team.accNum.map((accN) => (
                  <span key={accN.acc} className="flex my-2 gap-x-2">
                    <input
                      type="radio"
                      id={accN.acc}
                      name="acc"
                      value={accN.acc}
                      onChange={(e) => setSelectedAcc(e.target.value)}
                      checked={selectedAcc === accN.acc}
                    />
                    <label htmlFor={accN.acc}>{accN.name}</label>
                  </span>
                ))}
              </div>
              : null
              }
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
