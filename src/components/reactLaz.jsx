import React, { Suspense, lazy } from 'react';
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import useAction from "../../../hooks/useAction";
import { doctors, sortingField, sortingDirection } from "../../../constants";
import { StyledWrapper, StyledComponentWrapper } from "./style";

// Импорт компонентов с ленивой загрузкой
const AddAppointmentForm = lazy(() => import('../../AddAppointmentForm'));
const Header = lazy(() => import('../../Header'));
const AppointmentList = lazy(() => import('../../AppointmentList'));
const EditAppointmentModal = lazy(() => import('../../EditAppointments'));
const DeleteAppointmentModal = lazy(() => import('../../DeleteAppointments'));
const SortAppointment = lazy(() => import('../../SortAppointment'));
const FilterAppointment = lazy(() => import('../../FilterAppointment'));

// Компонент загрузки
const Loading = () => <div>Загрузка...</div>;

const Main = () => {
  // Ваш код...

  return (
    <StyledWrapper>
      <Suspense fallback={<Loading />}>
        <Header
          title="Приёмы"
          isShowButton={true}
          handleActionButton={logoutUser}
        />
        <AddAppointmentForm
          error={error}
          newAppointment={newAppointment}
          handleSubmit={handleSubmit}
          handleChangeInput={handleChangeInput}
          doctors={doctors}
        />
        <StyledComponentWrapper>
          <SortAppointment
            sortConfig={sortConfig}
            sortingField={sortingField}
            sortingDirection={sortingDirection}
            handleSortChange={handleSortChange}
          />

          <FilterAppointment
            isOpenFilterForm={isOpenFilterForm}
            openFilter={() => setIsOpenFilterForm(true)}
            filterConfig={filterConfig}
            handleFilterChange={handleFilterChange}
            handleFilterApply={handleFilterApply}
            handleFilterReset={handleFilterReset}
          />
        </StyledComponentWrapper>

        <AppointmentList
          appointments={sortedAppointments}
          handleEditAppointment={handleEditAppointment}
          handleDeleteAppointment={handleDeleteAppointment}
        />
        {isOpenEditModal && (
          <EditAppointmentModal
            error={editError}
            doctors={doctors}
            handleChangeInput={handleInputChange}
            appointment={selectedAppointment}
            handleEditModalClose={handleEditModalClose}
            handleEditSave={handleEditSave}
          />
        )}
        {isOpenDeleteModal && (
          <DeleteAppointmentModal
            handleDeleteModalClose={handleDeleteModalClose}
            deleteOneAppointment={deleteOneAppointment}
          />
        )}
        {snackbar.open && (
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar({ open: false, message: "" })}
            message={snackbar.message}
          />
        )}
      </Suspense>
    </StyledWrapper>
  );
};

export default Main;



Чтобы использовать крутящийся спиннер в качестве компонента загрузки, вам нужно будет импортировать и использовать соответствующий компонент спиннера из библиотеки, например, `react-loader-spinner`. Если вы еще не установили эту библиотеку, вы можете сделать это, выполнив следующую команду в вашем терминале:

npm install react-loader-spinner --save

После установки библиотеки, вы можете использовать крутящийся спиннер в качестве компонента загрузки. Вот пример кода:

import React, { Suspense, lazy } from 'react';
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import { RotatingLines } from 'react-loader-spinner'; // Импорт крутящегося спиннера
import useAction from "../../../hooks/useAction";
import { doctors, sortingField, sortingDirection } from "../../../constants";
import { StyledWrapper, StyledComponentWrapper } from "./style";

// Импорт компонентов с ленивой загрузкой
const AddAppointmentForm = lazy(() => import('../../AddAppointmentForm'));
const Header = lazy(() => import('../../Header'));
const AppointmentList = lazy(() => import('../../AppointmentList'));
const EditAppointmentModal = lazy(() => import('../../EditAppointments'));
const DeleteAppointmentModal = lazy(() => import('../../DeleteAppointments'));
const SortAppointment = lazy(() => import('../../SortAppointment'));
const FilterAppointment = lazy(() => import('../../FilterAppointment'));

// Компонент загрузки с крутящимся спиннером
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

const Main = () => {
  // Ваш код...

  return (
    <StyledWrapper>
      <Suspense fallback={<Loading />}>
        {/* Ваш код, который использует лениво загружаемые компоненты */}
      </Suspense>
    </StyledWrapper>
  );
};

export default Main;


В этом примере я использовал `RotatingLines` из `react-loader-spinner` в качестве компонента загрузки. Вы можете настроить стили и свойства спиннера в соответствии с вашими потребностями.