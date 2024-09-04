export type Competition = {
  name: string;
  start_date: string;
  end_date: string;
  registration_start_date: string;
  registration_end_date: string;
  location: string;
  meter: number;
  documentation: string;
  depth: number;
  isRegistrationClosed?: boolean;
};
