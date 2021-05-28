import React, { useState } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button as CommonButton } from "../components/common/Button";

import { SavedRecipesContainer } from "../containers/SavedRecipes";
import { MyMealsContainer } from "../containers/MyMeals";
import { MealFormContainer } from "../containers/MealForm";

import { VIEW, SUB_PAGES } from "../constants/recipes";

const Wrapper = styled.div`
  padding: 36px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-right: 14px;
`;

const ViewIconGroup = styled.div`
  margin-left: 36px;
`;

const ViewIcon = styled.span`
  color: #e69183;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #eba796;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  font-size: 16px;
  background: transparent;
  color: #00334e;
  border: none;
  outline: none;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #72be6c;
    opacity: ${(props) => (props.selected ? "1" : "0")};
    transition: all 300ms ease-in-out;
  }

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;

    &::before {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const AddMealButton = styled(CommonButton)`
  border-radius: 10px;
  width: 105px;
  height: 40px;
  background: white;
  color: #ee6f57;

  &:hover {
    color: #eba796;
  }
`;

export default function Meals({ user, savedRecipes, savedMeals }) {
  const [subPage, setSubPage] = useState(
    JSON.parse(localStorage.getItem("mealsSubPage")) || SUB_PAGES.SAVED_RECIPES
  );
  const [view, setView] = useState(
    JSON.parse(localStorage.getItem("savedRecipesView")) || VIEW.LIST
  );
  const [openAddMealForm, setOpenAddMealForm] = useState(false);

  const handleViewSetting = (value) => {
    localStorage.setItem("savedRecipesView", JSON.stringify(value));
    setView(value);
  };

  const handleSubPageSetting = (value) => {
    localStorage.setItem("mealsSubPage", JSON.stringify(value));
    setSubPage(value);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderGroup>
          <Title>Meals</Title>
          <AddMealButton
            title="Add Meal"
            onClick={() => setOpenAddMealForm(true)}
          >
            Add Meal
          </AddMealButton>
        </HeaderGroup>
        <ViewIconGroup>
          <ViewIcon title="List View">
            <FontAwesomeIcon
              icon="th-list"
              size="2x"
              onClick={() => handleViewSetting(VIEW.LIST)}
            />
          </ViewIcon>
          <ViewIcon title="Gallery View">
            <FontAwesomeIcon
              icon="th"
              size="2x"
              onClick={() => handleViewSetting(VIEW.GRID)}
            />
          </ViewIcon>
        </ViewIconGroup>
      </Header>

      <ButtonGroup>
        <Button
          value={SUB_PAGES.SAVED_RECIPES}
          selected={subPage === SUB_PAGES.SAVED_RECIPES}
          onClick={() => handleSubPageSetting(SUB_PAGES.SAVED_RECIPES)}
        >
          Saved Recipes
        </Button>
        <Button
          value={SUB_PAGES.MY_MEALS}
          selected={subPage === SUB_PAGES.MY_MEALS}
          onClick={() => handleSubPageSetting(SUB_PAGES.MY_MEALS)}
        >
          My Meals
        </Button>
      </ButtonGroup>

      {subPage === SUB_PAGES.SAVED_RECIPES && (
        <SavedRecipesContainer
          uid={user.uid}
          savedRecipes={savedRecipes}
          view={view}
          subPage={SUB_PAGES.SAVED_RECIPES}
          handleViewSetting={handleViewSetting}
        />
      )}
      {subPage === SUB_PAGES.MY_MEALS && (
        <MyMealsContainer
          uid={user.uid}
          savedMeals={savedMeals}
          view={view}
          subPage={SUB_PAGES.MY_MEALS}
          handleViewSetting={handleViewSetting}
        />
      )}

      <MealFormContainer
        uid={user.uid}
        open={openAddMealForm}
        setOpen={setOpenAddMealForm}
        formType="add"
      />
    </Wrapper>
  );
}
