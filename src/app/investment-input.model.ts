export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
}

//could be also like that
// export type InvestmentInput = {
//   initialInvestment: number,
//   annualInvestment: number,
//   duration: number,
//   expectedReturn: number,
// }