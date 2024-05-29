import { defineDb, defineTable, column } from "astro:db";

const ClubhouseReservations = defineTable({
  columns: {
    emailAddress: column.text(),
    phoneNumber: column.text(),
    reservationDate: column.date(),
  },
});

export default defineDb({
  tables: { ClubhouseReservations },
});
