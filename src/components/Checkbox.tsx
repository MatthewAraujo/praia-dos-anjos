export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
}

const Checkbox = (props: CheckboxProps) => (
  <div className="flex w-full gap-2">
    <input
      className="
      disabled:border-steel-400
        disabled:bg-steel-400 peer relative mt-1 h-6 w-6 shrink-0 appearance-none rounded-full  border-4
        border-praia-blue-500 bg-white  checked:border-0 checked:bg-praia-blue-500
        checked:ring-1 checked:ring-praia-blue-500 checked:ring-offset-1
        focus:outline-none focus:ring-1
        focus:ring-blue-100 focus:ring-offset-0
        
      "
      type="checkbox"
      {...props}
    />

    <label htmlFor={props.id} className="uppercase text-praia-blue-500">
      {props.label}
    </label>
  </div>
);

export default Checkbox;
