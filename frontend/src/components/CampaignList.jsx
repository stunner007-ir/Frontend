import React, { useState, useEffect } from "react";
import axios from "axios";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/campaigns");
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaign List</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign._id}>
            {campaign.message} - {campaign.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
