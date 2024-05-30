import { DatePicker, DateInput as MantineDateInput } from "@mantine/dates";
import { useState } from "react";

const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
const twoWeeks = getDateInWeeks(2);

export function DateInput({ reservedDates }: { reservedDates: Date[] }) {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        className="mb-4"
        value={date}
        onChange={setDate}
        minDate={twoWeeks}
        maxDate={nextYear}
        getDayProps={(date) => {
          if (
            reservedDates.some(
              (currentDate) => currentDate.toString() === date.toString()
            )
          ) {
            return { disabled: true, className: "!text-red-300" };
          }

          return {};
        }}
      />
      <MantineDateInput
        className="sr-only"
        value={date}
        name="reservation-date"
      />
    </>
  );
}

function getDateInWeeks(numberOfWeeks: number) {
  const date = new Date();
  date.setDate(date.getDate() + numberOfWeeks * 7);
  return date;
}
