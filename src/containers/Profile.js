import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import { Profile } from "../components/";
import {
  ACTIVITY_OPTIONS,
  GENDER_OPTIONS,
  GOALS,
} from "../constants/calculator";

export function ProfileContainer() {
  const [isProfileEditable, setIsProfileEditable] = useState(false);
  const [gender, setGender] = useState(
    JSON.parse(localStorage.getItem("gender")) || ""
  );
  const [age, setAge] = useState(JSON.parse(localStorage.getItem("age")));
  const [weight, setWeight] = useState(
    JSON.parse(localStorage.getItem("weight"))
  );
  const [height, setHeight] = useState(
    JSON.parse(localStorage.getItem("height"))
  );
  const [activity, setActivity] = useState(
    JSON.parse(localStorage.getItem("activity")) || ""
  );
  const [goal, setGoal] = useState(
    JSON.parse(localStorage.getItem("goal")) || ""
  );

  const toggleProfileEdit = () => {
    setIsProfileEditable(!isProfileEditable);
  };

  const handleSaveButton = () => {
    if (isProfileEditable) {
      localStorage.setItem(
        "gender",
        JSON.stringify({
          label: gender.label,
          value: gender.value,
        })
      );

      localStorage.setItem("age", JSON.stringify(age));
      localStorage.setItem("weight", JSON.stringify(weight));
      localStorage.setItem("height", JSON.stringify(height));

      localStorage.setItem(
        "activity",
        JSON.stringify({
          label: activity.label,
          value: activity.value,
        })
      );

      localStorage.setItem(
        "goal",
        JSON.stringify({
          label: goal.label,
          value: goal.value,
        })
      );
    }
    setIsProfileEditable(!isProfileEditable);
  };

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
          <Profile.CardContent>
            <Profile.Row>
              <Profile.RowTitle>Gender</Profile.RowTitle>
              {isProfileEditable ? (
                <Profile.RowGroup>
                  {GENDER_OPTIONS.map((option) => (
                    <Profile.RowOption
                      key={option.label}
                      value={option.value}
                      selected={option.value === gender.value}
                      onClick={() => setGender(option)}
                    >
                      {option.label}
                    </Profile.RowOption>
                  ))}
                </Profile.RowGroup>
              ) : (
                <Profile.RowText>{gender.label}</Profile.RowText>
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
                <Profile.RowText>{age}</Profile.RowText>
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
                <Profile.RowText>{weight} kg</Profile.RowText>
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
                <Profile.RowText>{height} cm</Profile.RowText>
              )}
            </Profile.Row>

            <Profile.Row>
              <Profile.RowTitle>Activity</Profile.RowTitle>
              {isProfileEditable ? (
                <Profile.RowGroup>
                  {ACTIVITY_OPTIONS.map((option) => (
                    <Profile.RowOption
                      key={option.label}
                      value={option.value}
                      data-tip
                      data-for={option.value}
                      selected={option.value === activity.value}
                      onClick={() => setActivity(option)}
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
                <Profile.RowText>{activity.label}</Profile.RowText>
              )}
            </Profile.Row>

            <Profile.Row>
              <Profile.RowTitle>Goal</Profile.RowTitle>
              {isProfileEditable ? (
                <Profile.RowGroup>
                  {GOALS.map((option) => (
                    <Profile.RowOption
                      key={option.label}
                      value={option.value}
                      selected={option.value === goal.value}
                      onClick={() => setGoal(option)}
                    >
                      {option.label}
                    </Profile.RowOption>
                  ))}
                </Profile.RowGroup>
              ) : (
                <Profile.RowText>{goal.label}</Profile.RowText>
              )}
            </Profile.Row>
          </Profile.CardContent>
          {isProfileEditable && (
            <Profile.CardFooter>
              <Profile.Button
                themetype="primaryGreen"
                size="normal"
                onClick={handleSaveButton}
              >
                Save
                <Profile.ItemIcon icon="check" />
              </Profile.Button>
            </Profile.CardFooter>
          )}
        </Profile.Card>
      </Profile>
    </>
  );
}
