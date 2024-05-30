import { DatePicker, DateInput as MantineDateInput } from "@mantine/dates";
import { useState } from "react";

const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

export function DateInput() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        className="mb-4"
        value={date}
        onChange={setDate}
        minDate={new Date()}
        maxDate={nextYear}
      />
      <MantineDateInput
        className="sr-only"
        value={date}
        name="reservation-date"
      />
    </>
  );
}
