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
};

export interface ICarouselCard {
  title: string;
  description: string;
  image: string;
  id: number;
  link?: boolean;
}
