import React from "react";
import { ProfileContainer } from "../containers/Profile";

export default function Profile({ user, measurementsData }) {
  return <ProfileContainer user={user} measurementsData={measurementsData} />;
}
