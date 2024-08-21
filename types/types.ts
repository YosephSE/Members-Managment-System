// Define types and interfaces here

export type genderType = "Male" | "Female";

export type titleType =
  | ""
  | "Mr."
  | "Mrs."
  | "Ms."
  | "Miss"
  | "Dr."
  | "Prof."
  | "Sir"
  | "Madam"
  | "Rev.";

export interface utilPropType {
  children: React.ReactNode;
  href: any;
  className: string;
}

export interface memberType {
  title: string;
  fullname: string;
  sex: "Male" | "Female";
  address: {
    subcity: string;
    district: string;
    homeno?: string;
    neighborhood?: string;
  };
  contact: {
    homephone?: string;
    personalphone: string;
    email?: string;
  };
  handicap: {
    has_handicap: boolean;
    handicap_type?: string;
  };
  birthdate: string;
}