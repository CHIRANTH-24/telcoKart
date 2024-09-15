export type EmailBodyOptions = {
  to: {
    name: string;
    email: string;
  }[];
  variables: {
    company_name: string;
    otp: string;
  };

  from: {
    email: string;
  };
  domain: string;
  reply_to: {
    email: string;
  }[];
  template_id: string;
};
