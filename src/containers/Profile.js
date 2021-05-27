import React, { useState, useContext } from "react";
import ReactTooltip from "react-tooltip";

import { FirestoreContext } from "../context/firestore";

import { Profile } from "../components/";
import {
  genderOptions,
  getGenderLabel,
  goalsOptions,
  getGoalsLabel,
  activityOptions,
  getActivityLabel,
} from "../constants/calculator";

import { getCalories } from "../helpers/calories";

export function ProfileContainer({ user, measurementsData }) {
  const { db } = useContext(FirestoreContext);

  const [isProfileEditable, setIsProfileEditable] = useState(false);

  const [gender, setGender] = useState(measurementsData?.gender || "");
  const [age, setAge] = useState(measurementsData?.age || "");
  const [weight, setWeight] = useState(measurementsData?.weight || "");
  const [height, setHeight] = useState(measurementsData?.height || "");
  const [activity, setActivity] = useState(measurementsData?.activity || "");
  const [goal, setGoal] = useState(measurementsData?.goal || "");

  const toggleProfileEdit = () => {
    setIsProfileEditable(!isProfileEditable);
  };

  const handleCancelButton = () => {
    setGender(measurementsData.gender);
    setAge(measurementsData.age);
    setWeight(measurementsData.weight);
    setHeight(measurementsData.height);
    setActivity(measurementsData.activity);
    setGoal(measurementsData.goal);
    setIsProfileEditable(!isProfileEditable);
  };

  const handleSaveButton = () => {
    setIsProfileEditable(!isProfileEditable);
    const uid = user.uid;

    const measurements = {
      gender: gender,
      age: parseFloat(age),
      weight: parseFloat(weight),
      height: parseFloat(height),
      activity: activity,
      goal: goal,
    };

    db.collection("user")
      .doc(uid)
      .set({
        measurements,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    db.collection("calories")
      .doc(uid)
      .set(getCalories(measurements))
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const showSaveButton = gender && age && weight && height && activity && goal;

  return (
    <>
      <Profile>
        <Profile.Header>
          <Profile.Title>Profile</Profile.Title>
          {!isProfileEditable && (
            <Profile.Button
              themetype="secondaryGreen"
              size="normal"
              onClick={toggleProfileEdit}
            >
              Edit <Profile.ItemIcon icon="pencil-alt" />
            </Profile.Button>
          )}
        </Profile.Header>

        <Profile.Card>
          <Profile.Row>
            <Profile.RowTitle>Gender</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                {genderOptions.map((option) => (
                  <Profile.RowOption
                    key={option.label}
                    value={option.value}
                    selected={option.value === gender}
                    onClick={() => setGender(option.value)}
                  >
                    {option.label}
                  </Profile.RowOption>
                ))}
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>
                {getGenderLabel(measurementsData?.gender)}
              </Profile.RowText>
            )}
          </Profile.Row>

          <Profile.Row>
            <Profile.RowTitle>Age</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                <Profile.Input
                  id="age"
                  type="number"
                  value={age}
                  placeholder=" "
                  onChange={({ target }) => setAge(target.value)}
                />
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>{measurementsData?.age}</Profile.RowText>
            )}
          </Profile.Row>

          <Profile.Row>
            <Profile.RowTitle>Weight</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                <Profile.Input
                  id="weight"
                  type="number"
                  value={weight}
                  placeholder="kg"
                  onChange={({ target }) => setWeight(target.value)}
                />
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>
                {measurementsData?.weight && `${measurementsData?.weight} kg`}
              </Profile.RowText>
            )}
          </Profile.Row>

          <Profile.Row>
            <Profile.RowTitle>Height</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                <Profile.Input
                  id="height"
                  type="number"
                  value={height}
                  placeholder="cm"
                  onChange={({ target }) => setHeight(target.value)}
                />
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>
                {measurementsData?.height && `${measurementsData?.height} cm`}
              </Profile.RowText>
            )}
          </Profile.Row>

          <Profile.Row>
            <Profile.RowTitle>Activity</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                {activityOptions.map((option) => (
                  <Profile.RowOption
                    key={option.label}
                    value={option.value}
                    data-tip
                    data-for={option.value}
                    selected={option.value === activity}
                    onClick={() => setActivity(option.value)}
                  >
                    {option.label}
                    <ReactTooltip
                      id={option.value}
                      type="success"
                      effect="solid"
                      multiline={true}
                    >
                      <span>{option.tooltip}</span>
                    </ReactTooltip>
                  </Profile.RowOption>
                ))}
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>
                {getActivityLabel(measurementsData?.activity)}
              </Profile.RowText>
            )}
          </Profile.Row>

          <Profile.Row>
            <Profile.RowTitle>Goal</Profile.RowTitle>
            {isProfileEditable ? (
              <Profile.RowGroup>
                {goalsOptions.map((option) => (
                  <Profile.RowOption
                    key={option.label}
                    value={option.value}
                    selected={option.value === goal}
                    onClick={() => setGoal(option.value)}
                  >
                    {option.label}
                  </Profile.RowOption>
                ))}
              </Profile.RowGroup>
            ) : (
              <Profile.RowText>
                {getGoalsLabel(measurementsData?.goal)}
              </Profile.RowText>
            )}
          </Profile.Row>
        </Profile.Card>

        {isProfileEditable && (
          <Profile.ButtonGroup>
            {measurementsData && (
              <Profile.Button
                themetype="secondaryGreen"
                size="normal"
                onClick={handleCancelButton}
              >
                Cancel
              </Profile.Button>
            )}
            {showSaveButton && (
              <Profile.Button
                themetype="primaryGreen"
                size="normal"
                onClick={handleSaveButton}
              >
                Save
                <Profile.ItemIcon icon="check" />
              </Profile.Button>
            )}
          </Profile.ButtonGroup>
        )}
      </Profile>
    </>
  );
}
