
export type Page = 'home' | 'analyzer' | 'dashboard' | 'resources';

export interface Violation {
  type: string;
  legal_limit: string;
  actual_rate: string;
  excess: string;
  excess_amount?: string;
}

export interface AnalysisResult {
  is_lawful: boolean;
  violations: Violation[];
  recommended_action: string;
}

export interface LoanDetails {
    principal: string;
    dailyRate: string;
    termDays: string;
    totalPayment: string;
}

// Data for charts
export interface MfoViolationData {
  name: string;
  violations: number;
}

// Нові типи для розширеного аналізу кредитних договорів

export interface RiskItem {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendation: string;
}

export interface SummaryBlock {
  overview: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  totalViolations: number;
}

export interface DisputableClause {
  id: string;
  clauseReference: string;
  textSummary: string;
  issue: string;
}

export interface ActionRecommendation {
  id: string;
  title: string;
  description: string;
  suggestedAction: 'accept' | 'negotiate' | 'decline' | 'consult_lawyer';
}

export interface LoanAgreement {
  id?: string;
  fileName?: string;
  fileData: {
    data: string;
    mimeType: string;
  };
  uploadedAt?: string;
}

export interface ExtendedAnalysisResult extends AnalysisResult {
  summary: SummaryBlock;
  risks: RiskItem[];
  disputableClauses: DisputableClause[];
  actions: ActionRecommendation[];
  analysisId?: string;
  analyzedAt?: string;
  cacheKey?: string;
}

export interface ViolationTypeData {
  name:string;
  value: number;
}

export interface RegionalData {
    region: string;
    cases: number;
}
