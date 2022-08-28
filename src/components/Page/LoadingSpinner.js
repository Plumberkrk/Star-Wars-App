import { React, CSSProperties } from "react";
import { LoadingElement, LoadingContainer } from "./LoadingSpinner.styles";
import BeatLoader from "react-spinners/BeatLoader";

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <LoadingElement>
        <BeatLoader color="white" size={15} />
      </LoadingElement>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
