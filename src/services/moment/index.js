import moment from "moment";

const momentServices = {
    formatDate(date, formatString) {
        date = date || new Date();
        return moment(date).format(formatString);
    },
    difference(date1, date2, unit) {
        date1 = date1 || new Date();
        date2 = date2 || new Date();

        return moment(date1).diff(date2, unit);
    },
    fromNowDays(date) {
        date = date || new Date();
        return moment().diff(date, "days");
    },
};

export default momentServices;
