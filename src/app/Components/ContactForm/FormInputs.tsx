import TextInput from "@/app/Utils/TextInput";
import { IContactForm } from "@/app/types";
interface IProps {
  onChange(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>): void;
  formData: IContactForm;
}
export function BasicDetails({ onChange, formData }: IProps) {
  return ["Full Name", "Email ID", "Organization"].map((item, index) => {
    const itemIdentifier = item.toLowerCase().replace(" ", "_");
    return (
      <div className="flex flex-col w-full" key={index}>
        <label className="mb-2 text-fs-100">{item}</label>
        <TextInput
          placeholder={`Enter your ${item}`}
          type="text"
          name={itemIdentifier}
          value={formData?.[itemIdentifier as keyof object]}
          onChange={onChange}
        />
      </div>
    );
  });
}

export function DropDown({ onChange, formData }: IProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2 text-fs-100">What is your query about?</label>
      <TextInput select={true} name="query" onChange={onChange} value={formData.query} >
        {[
          "Select from the dropdown",
          "App Development",
          "Web Development",
          "Cloud Computing",
          "Blockchain",
          "Cyber Security",
          "Others",
        ].map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </TextInput>
    </div>
  );
}
