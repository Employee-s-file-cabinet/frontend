/* eslint-disable no-unused-vars */
import './ConditionalInput.scss';
import { useWatch } from 'react-hook-form';

export default function ConditionalInput({
  className,
  placeholder,
  control,
  type,
  register,
  index,
  disabled,
  errors,
  fieldSetName,
  fieldName,
  conditionalFieldName,
  conditionalFieldType,
}) {
  const value = useWatch({
    control,
    conditionalFieldName: fieldSetName,
  });

  function disableInput(conditionalType, fieldSet, conditionalField) {
    if (conditionalType === 'date') {
      return value?.[fieldSet]?.[index]?.[conditionalField]?.toString() !==
        'Invalid Date' && !errors?.[fieldSet]?.[index]?.[conditionalField]
        ? ''
        : 'input_disabled';
    }
    return value?.[fieldSet]?.[index]?.[conditionalField] !== '' &&
      !errors?.[fieldSet]?.[index]?.[conditionalField]
      ? ''
      : 'input_disabled';
  }

  return (
    <div>
      <input
        className={`${className} ${disableInput(
          conditionalFieldType,
          fieldSetName,
          conditionalFieldName
        )}`}
        placeholder={placeholder}
        type={type}
        {...register(`${fieldSetName}.${index}.${fieldName}`, {
          valueAsDate: true,
        })}
        disabled={disabled}
      />
    </div>
  );
}
