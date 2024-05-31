import { defineDb, defineTable, column } from "astro:db";

const ClubhouseReservations = defineTable({
  columns: {
    reservationDate: column.date({ unique: true, optional: false }),
    firstName: column.text({ optional: false }),
    lastName: column.text({ optional: false }),
    emailAddress: column.text({ optional: false }),
    phoneNumber: column.text({ optional: false }),
    address: column.text({ optional: false }),
    eventType: column.text({ optional: false }),
    description: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { ClubhouseReservations },
});
