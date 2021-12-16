import React from 'react';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import Select from 'react-select';
import countries from '../schemas/objects/countries';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';

const CountrySelection = React.forwardRef(
  ({ type, value, markers, level, onChange }, ref) => {
    const { title, description } = type;
    const handleChange = React.useCallback(
      (event) => {
        const inputValue = {
          list: event,
        };

        onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
      },
      [onChange]
    );

    return (
      <Fieldset
        legend={title}
        description={description}
        markers={markers}
        level={level}
      >
        <Select
          options={countries}
          defaultValue={value && value.list}
          isMulti
          onChange={handleChange}
        />
      </Fieldset>
    );
  }
);

export default CountrySelection;
