import React from 'react';
import useSWR from 'swr';
import { makeFetchRequest } from './httpConnector';

interface Organisation {
  id: string;
  domain: string;
  domains: string[];
  name: string;
  address?: any;
  industrialSector: string | null;
  lloydsBrokerReference: string | null;
  brokerLicenseNumber: string | null;
  licenseExpiryDate: Date | null;
  naic: string | null;
  einCode: string | null;
  usSurplusBrokerLicenses: any[];
}

const FirstPage = () => {
  const url = 'https://api.dev.iwnonprod.com/organisations';
  const { data } = useSWR<Organisation[]>(url, makeFetchRequest);

  return <div>{data && data.map((org) => <h3>{org.name}</h3>)}</div>;
};

export default FirstPage;
