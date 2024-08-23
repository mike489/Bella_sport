import styled from "styled-components";
// import { lighten } from "polished";

const primaryColor = "#FFC400";
const primaryFocusColor = "#fca503";
const gray50 = "#f9fafb";
const gray300 = "#d1d5db";
const gray900 = "#111827";
const lightergray = "#91969f";
const ringPrimary500 = "#3b82f6";

// General Styles
export const MinHScreen = styled.div`
  min-height: 100vh;
`;

export const BgCover = styled.div`
  background-size: cover;
`;

export const BgInherit = styled.div`
  background-color: inherit;
`;

export const BgWhite = styled.div`
  background-color: white;
`;

export const FontPrimary = styled.div`
  font-family: "Primary Font", sans-serif;
`;

export const FontSecondary = styled.div`
  font-family: "Secondary Font", sans-serif;
`;

// Section Styling
export const Section = styled.section`
  &.bg-white {
    padding: 8px 0;

    @media (min-width: 1024px) {
      padding: 16px 0;
    }
  }

  .text-gray-900 {
    color: ${gray900};
  }

  .text-ligher-gray {
    color: ${lightergray};
  }

  .text-gray-500 {
    color: ${gray900}; /* This line was incorrect in your SCSS */
  }

  .text-center {
    text-align: center;
  }

  .text-4xl {
    font-size: 2.25rem;
  }
  .text-2xl {
    font-size: 1.25rem;
  }

  .font-extrabold {
    font-weight: 800;
  }

  .font-semibold {
    font-weight: 600;
  }

  .max-w-screen-md {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  .space-y-8 > * + * {
    margin-top: 2rem;
  }
`;

// Form Elements
export const Form = styled.form`
  .block {
    display: block;
    width: 100%;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .shadow-sm {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .bg-gray-50 {
    background-color: ${gray50};
  }

  .border {
    border-width: 1px;
    border-style: solid;
  }

  .border-gray-300 {
    border-color: ${gray300};
  }

  .focus-ring-primary-500:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${ringPrimary500};
  }

  .focus-border-primary-500:focus {
    border-color: ${ringPrimary500};
  }

  input,
  textarea {
    padding: 0.625rem 0.875rem;
    color: ${gray900};
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 0.75rem 1.25rem;
    font-weight: 500;
    color: white;
    background-color: ${primaryColor};
    border-radius: 0.5rem;

    &:hover {
      background-color: ${primaryFocusColor};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(${primaryColor}, 0.5);
    }
  }
`;

// Responsive Design for Text
export const ResponsiveText = styled.div`
  @media (min-width: 640px) {
    .sm-text-xl {
      font-size: 1.25rem;
    }

    .sm-w-fit {
      width: fit-content;
    }
  }
`;
