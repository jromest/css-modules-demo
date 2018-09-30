import globalStyle from "../styles/global.css";
import buttonStyle from "../styles/button.css";

const ButtonContainer = document.createElement("div");
ButtonContainer.classList.add(globalStyle.container);

let elements = [];

const Button = props => `
  <button class="${props.style}">
    ${props.text}
  </button>
`;

const PrimaryButton = Button({
  style: buttonStyle.primary,
  text: "primary"
});

const SuccessButton = Button({
  style: buttonStyle.success,
  text: "success"
});

const DangerButton = Button({
  style: buttonStyle.danger,
  text: "danger"
});

elements.push(PrimaryButton, SuccessButton, DangerButton);

ButtonContainer.innerHTML = elements.join("");

export default ButtonContainer;
