import React from 'react';

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  name,
  className = '',
  options = [],
}) {
  if (type === 'select') {
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="input-field"
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className="input-field resize-none"
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="border-2 border-dashed border-dark-300 dark:border-dark-700 rounded-xl p-6 text-center">
          <input
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            id={name}
          />
          <label
            htmlFor={name}
            className="cursor-pointer text-primary-600 hover:text-primary-700"
          >
            <span>Click to upload files</span>
            <span className="block text-sm text-dark-400 mt-1">PNG, JPG, PDF up to 10MB</span>
          </label>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
