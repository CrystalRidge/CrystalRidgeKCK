import { IMaskInput } from "react-imask";
import { InputBase } from "@mantine/core";

export function PhoneNumberInput({ name }: { name: string }) {
  return (
    <InputBase
      required
      label="Phone Number"
      component={IMaskInput}
      mask="(000) 000-0000"
      name={name}
    />
  );
}
