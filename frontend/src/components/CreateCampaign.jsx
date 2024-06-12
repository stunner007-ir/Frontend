import React, { useState } from "react";
import axios from "axios";

const CreateCampaign = () => {
  const [campaign, setCampaign] = useState({ audienceId: "", message: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/campaigns",
        campaign
      );
      if (response.status === 200 || response.status === 201) {
        alert("Campaign created successfully");
        setCampaign({ audienceId: "", message: "" }); // Clear form after successful submission
        setError(null);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      setError("Failed to create campaign. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Campaign</h2>
      <input
        type="text"
        name="audienceId"
        placeholder="Audience ID"
        value={campaign.audienceId}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={campaign.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Create Campaign</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default CreateCampaign;
