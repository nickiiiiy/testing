import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import AddAppointmentForm from "../../AddAppointmentForm";
import Header from "../../Header";
import AppointmentList from "../../AppointmentList";
import EditAppointmentModal from "../../EditAppointments";
import DeleteAppointmentModal from "../../DeleteAppointments";
import SortAppointment from "../../SortAppointment";
import { sortArray } from "../../../helpers/sortAppointments";
import { Snackbar } from "@mui/material";
import useAction from "../../../hooks/useAction";
import { doctors, sortSelect, sortDirect } from "../../../constants";
import { StyledWrapper } from "./style";
import FilterAppointment from "../../FilterAppointment";

const Main = () => {
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    complaints: "",
  });
  const [error, setError] = useState({
    patientNameError: "",
    doctorNameError: "",
    appointmentDateError: "",
    complaintsError: "",
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState([]);
  const [editError, setEditError] = useState({
    patientNameError: "",
    doctorNameError: "",
    appointmentDateError: "",
    complaintsError: "",
  });
  // const [sortBy, setSortBy] = useState("");
  // const [sortDirection, setSortDirection] = useState("asc");
  const [sortConfig, setSortConfig] = useState({ field: "", direction: "asc" });

  //
  // const [filterConfig, setFilterConfig] = useState({
  //   fromDate: "",
  //   toDate: "",
  // });
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const { appointments, errors } = useSelector((state) => state.appointment);

  const {
    createAppointment,
    getAppointment,
    editAppointment,
    deleteAppointment,
  } = useAction();

  useEffect(() => {
    getAppointment();
  }, []);

  useEffect(() => {
    if (errors && errors.length > 0) {
      setSnackbar({
        ...snackbar,
        open: true,
        message:
          "Извините, произошла ошибка. Проверьте даннные, которые вы вводили.",
      });
    }
  }, [errors]);

  // /////////////////////
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  // const filteredAppointments = useMemo(() => {
  //   if (!filterConfig.fromDate && !filterConfig.toDate) {
  //     return appointments;
  //   }

  //   return appointments.filter((appointment) => {
  //     const appointmentDate = new Date(appointment.appointmentDate);
  //     if (filterConfig.fromDate && appointmentDate < filterConfig.fromDate) {
  //       return false;
  //     }
  //     if (filterConfig.toDate && appointmentDate > filterConfig.toDate) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [appointments, filterConfig]);
  const [filterConfig, setFilterConfig] = useState({
    fromDate: null,
    toDate: null,
  });
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const handleFilterApply = () => {
    let filtered = appointments;
    if (filterConfig.fromDate || filterConfig.toDate) {
      filtered = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.appointmentDate);
        if (filterConfig.fromDate && appointmentDate < filterConfig.fromDate) {
          return false;
        }
        if (filterConfig.toDate && appointmentDate > filterConfig.toDate) {
          return false;
        }
        return true;
      });
    }
    setFilteredAppointments(filtered);
  };

  const handleFilterReset = () => {
    setFilterConfig({ fromDate: null, toDate: null });
    setFilteredAppointments(appointments);
  };

  useEffect(() => {
    handleFilterApply();
  }, [filterConfig]);

  // useEffect(() => {
  //   if (filterConfig.fromDate || filterConfig.toDate) {
  //     const filtered = appointments.filter((appointment) => {
  //       const appointmentDate = new Date(appointment.appointmentDate);
  //       if (filterConfig.fromDate && appointmentDate < filterConfig.fromDate) {
  //         return false;
  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sortSelect") {
      const isValidField = sortSelect.find((field) => field.name === value);
      if (isValidField) {
        setSortConfig((prevConfig) => ({
          ...prevConfig,
          field: isValidField.name,
        }));
      }
    } else if (name === "sortDirect") {
      setSortConfig((prevConfig) => ({
        ...prevConfig,
        direction: value,
      }));
    }
  };

  const sortedAppointments = useMemo(() => {
    if (sortConfig.field === "") {
      return appointments;
    }

    const direction = sortConfig.direction === "asc" ? 1 : -1;

    return [...appointments].sort((a, b) => {
      switch (sortConfig.field) {
        case "Имя":
          return direction * a.patientName.localeCompare(b.patientName);
        case "Врач":
          return direction * a.doctorName.localeCompare(b.doctorName);
        case "Дата":
          return (
            direction *
            (new Date(a.appointmentDate) - new Date(b.appointmentDate))
          );
        default:
          return appointments;
      }
    });
  }, [appointments, sortConfig]);

  const handleFilterOpen = () => {
    setIsOpenFilter(true);
  };
  ///////////////////////////////////

  const handleEditAppointment = (id) => {
    const oldAppointments = [...appointments];
    const appointment = oldAppointments.find(
      (appointment) => appointment._id === id
    );
    setSelectedAppointment(appointment);
    setIsOpenEditModal(true);
  };

  const handleInputChange = (e) => {
    setSelectedAppointment({
      ...selectedAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSave = () => {
    if (!selectedAppointment.patientName.trim()) {
      setEditError({
        ...editError,
        patientNameError: "Поле не может быть пустым ",
      });
      return;
    }

    if (!selectedAppointment.doctorName.trim()) {
      setEditError({
        ...editError,
        doctorNameError: "Поле не может быть пустым ",
      });
      return;
    }

    if (!selectedAppointment.complaints.trim()) {
      setEditError({
        ...editError,
        complaintsError: "Поле не может быть пустым ",
      });
      return;
    }

    const date = new Date(selectedAppointment.appointmentDate);
    if (date < new Date()) {
      setEditError({
        ...editError,
        appointmentDateError: "Дата не может быть в прошлом",
      });
      return;
    }

    editAppointment(selectedAppointment);
    setEditError({
      patientNameError: "",
      doctorNameError: "",
      appointmentDateError: "",
      complaintsError: "",
    });
    setSelectedAppointment(null);
    setIsOpenEditModal(false);
  };

  const handleEditModalClose = () => {
    setIsOpenEditModal(false);
    setSelectedAppointment(null);
    setEditError({
      patientNameError: "",
      doctorNameError: "",
      appointmentDateError: "",
      complaintsError: "",
    });
  };

  const handleChangeInput = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteModalClose = () => {
    setIsOpenDeleteModal(false);
  };

  const handleDeleteAppointment = (id) => {
    const oldAppointments = [...appointments];
    const appointment = oldAppointments.find(
      (appointment) => appointment._id === id
    );

    setIsOpenDeleteModal(true);
    setSelectedAppointment(appointment);
  };

  const deleteOneAppointment = () => {
    deleteAppointment(selectedAppointment);
    setIsOpenDeleteModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newAppointment.patientName.trim()) {
      setError({
        ...error,
        patientNameError: "Поле не может быть пустым ",
      });
      return;
    }

    if (!newAppointment.doctorName.trim()) {
      setError({
        ...error,
        doctorNameError: "Поле не может быть пустым ",
      });
      return;
    }

    if (!newAppointment.complaints.trim()) {
      setError({
        ...error,
        complaintsError: "Поле не может быть пустым ",
      });
      return;
    }

    const date = new Date(newAppointment.appointmentDate);
    if (date < new Date()) {
      setError({
        ...error,
        appointmentDateError: "Дата не может быть в прошлом",
      });
      return;
    }

    createAppointment(newAppointment);
    setError({
      patientNameError: "",
      doctorNameError: "",
      appointmentDateError: "",
      complaintsError: "",
    });

    setNewAppointment({
      patientName: "",
      doctorName: "",
      appointmentDate: "",
      complaints: "",
    });
  };

  return (
    <StyledWrapper>
      <Header title="Приёмы" isShowButton={true} />
      <AddAppointmentForm
        error={error}
        newAppointment={newAppointment}
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        doctors={doctors}
      />
      <SortAppointment
        sortConfig={sortConfig}
        sortSelect={sortSelect}
        sortDirect={sortDirect}
        handleSortChange={handleSortChange}
      />
      {/* {isOpenFilter && ( */}
      <FilterAppointment
        filterConfig={filterConfig}
        appointments={appointments}
        handleFilterApply={handleFilterApply}
        handleFilterReset={handleFilterReset}
        handleFilterChange={handleFilterChange}
        filteredAppointments={filteredAppointments}
      />
      {/* )} */}
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
    </StyledWrapper>
  );
};

export default Main;
