export interface IWrapper {
  children: React.ReactNode;
  className?: string;
}

export type IContactForm = {
  full_name: string;
  email_id: string;
  organization: string;
  query: string;
  message: string;
}
