import { useEffect, useMemo, useState } from "react";

// fallback response, just in case the BE API is off
const MOCK_DATA = {
  clubSalesGoal: {
    value: 15,
    total: 207,
  },
  facility_name: 'Club',
  referralLeadsGoal: {
    value: 35,
    total: 100,
  },
  memberCountGoal: {
    percentage: 95,
  },
  memberExperience: {
    nps: {
      value: 28,
      days: 90,
      variantValue: 4, // this value can be negative
    },
    disengaged: {
      value: 120,
      helpPercentage: 3,
    },
  },
  myMetrics: {
    referralLeads: {
      value: 3,
    },
    yourSales: {
      value: 15,
      percentage: 10,
    },
  },
};
const API_URL = "https://5f35-2601-84-8700-1080-4dbe-65b8-146e-67d1.ngrok.io/sales/dashboard/";

// hook to fetch the BE API and handle the loading state
export const useFetchInfo = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const queryString = window.location.search;
  const clubId = useMemo(() => {
    const urlParams = new URLSearchParams(queryString);
    const clubId = urlParams.get("clubId");

    if (!clubId) return "";

    return clubId;
  }, [queryString]);
  const url = `${API_URL}${clubId}`;

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => setData(MOCK_DATA)) // fallback to mock data in case it fails
      .finally(() => setLoading(false))
  }, [clubId, url]);

  return [data, loading];
};
