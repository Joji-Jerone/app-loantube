import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const mainContext = createContext();

const dataModal = {
  loanAmount: "",
  loanTerm: "",
  loanPurpose: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dob: "",
  email: "",
  mobile: "",
  relationship: "",
  noOfDependents: "",
  postCode: "",
  houseNo: "",
  flatNo: "",
  houseName: "",
  street: "",
  countryDistrict: "",
  city: "",
  years: "",
  months: "",
  residental: "",
  netMonthlyIncome: "",
  payFrequency: "",
  nextPayDate: "",
  payment: "",
  employement: "",
  occupation: "",
  accountNo: "",
  sortCode: "",
  password: "",
  check1: "",
  check2: "",
  emailBool: "",
  sms: "",
  call: "",
};

function MainProvider(props) {
  const [stepNo, setStep] = useState(1);
  const [data, setData] = useState(dataModal);

  return (
    <mainContext.Provider value={{ stepNo, setStep, data, setData }}>
      {props.children}
    </mainContext.Provider>
  );
}

export default MainProvider;
