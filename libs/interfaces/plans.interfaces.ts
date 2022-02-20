export interface AbillsPlan {
  discount?: number;
  extCmd?: string;
  manualActivate?: number;
  feesType?: number;
  name: string;
  period?: number;
  tpId: number;
  activateNotification?: number;
  periodAlignment?: number;
  nextAbonDate?: string;
  userCount?: number;
  description?: string;
  price?: number;
  priority?: number;
  vat?: number;
  paymentType?: number;
  createAccount?: number;
  userPortal?: number;
}

export interface Plan {
  id: number,
  name: string,
  description?: string,
}

export type GetAbillsPlansResponse = AbillsPlan[];
export type GetPlansResponse = Plan[];
