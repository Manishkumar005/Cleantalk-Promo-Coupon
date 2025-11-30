export interface CalculatorState {
  spamPerDay: number;
  minutesPerSpam: number;
  hourlyWage: number;
}

export interface CalculationResult {
  dailyTimeLost: number; // in minutes
  yearlyTimeLost: number; // in hours
  yearlyMoneyLost: number; // in currency
}

export interface AIAnalysisState {
  websiteType: string;
  trafficLevel: string;
  loading: boolean;
  result: string | null;
  error: string | null;
}