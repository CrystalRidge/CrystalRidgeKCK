import { defineDb, defineTable, column } from "astro:db";

const ClubhouseReservations = defineTable({
  columns: {
    reservationDate: column.date({ unique: true }),
    emailAddress: column.text(),
    phoneNumber: column.text(),
  },
});

export default defineDb({
  tables: { ClubhouseReservations },
});
