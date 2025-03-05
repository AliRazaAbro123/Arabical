"use client";
import React, { useState, useEffect } from "react";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Mapping Arabic numerals to Sindhi numerals
  const arabicToSindhi = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  const sindhiToArabic = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  // Function to convert Arabic to Sindhi
  const convertToSindhi = (numStr) =>
    numStr.replace(/[0-9]/g, (match) => arabicToSindhi[match]);

  // Function to convert Sindhi to Arabic
  const convertToArabic = (numStr) =>
    numStr.replace(/[۰-۹]/g, (match) => sindhiToArabic[match]);

  const handleClick = (value) => {
    if (value === "صاف") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        const evaluation = eval(convertToArabic(input)).toString();
        setInput(convertToSindhi(evaluation));
        setResult(null);
      } catch {
        setInput("غلط");
        setResult(null);
      }
    } else if (value === "ڊيل") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    if (input === "") {
      setResult(null);
      return;
    }
    const lastChar = input.slice(-1);
    if (!isNaN(convertToArabic(lastChar)) && /[+\-*/%]/.test(input)) {
      try {
        const evalResult = eval(convertToArabic(input));
        setResult(convertToSindhi(evalResult.toString()));
      } catch {
        setResult(null);
      }
    }
  }, [input]);

  const buttonStyle =
    "p-3 bg-zinc-700 shadow-xl text-2xl text-white rounded-4xl hover:bg-zinc-800";

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black max-sm:w-full">
      <div className="bg-black min-h-96 shadow-lg rounded-lg p-2 max-sm:p-2 w-96 max-sm:w-full max-sm:h-screen max-sm:rounded-none">
        <div className="mb-1 h-[30dvh] flex items-end justify-end text-right max-sm:text-4xl text-3xl text-blue-600 bg-black p-2 rounded max-sm:h-[20%] max-sm:flex max-sm:items-center max-sm:justify-end overflow-hidden break-words whitespace-normal">
          {input || "۰"}
        </div>
        {result !== null && (
          <div className="mb-2 max-sm:mt-[-2rem] text-right text-xl text-blue-700 max-sm:text-right">
            = {result}
          </div>
        )}
        <div
          className="bg-black w-full grid grid-cols-4 gap-3 max-sm:absolute max-sm:bottom-0 max-sm:p-2 max-sm:left-0 max-sm:h-[60dvh] max-sm:mb-3"
          role="group"
          aria-label="Calculator Buttons"
        >
          {[
            "صاف",
            "%",
            "/",
            "ڊيل",
            "۷",
            "۸",
            "۹",
            "*",
            "۴",
            "۵",
            "۶",
            "-",
            "۱",
            "۲",
            "۳",
            "+",
            "۰۰",
            "۰",
            ".",
            "=",
          ].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={buttonStyle}
            >
              {value === "ڊيل" ? <FontAwesomeIcon icon={faBackspace} /> : value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
