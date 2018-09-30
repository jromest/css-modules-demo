import globalStyle from "../styles/global.css";
import cardStyle from "../styles/card.css";

const CardContainer = document.createElement("div");
CardContainer.classList.add(globalStyle.container);

let elements = [];

const CardDiv = props => `
  <div class="${props.style}">
    ${props.text}
  </div>
`;

const PrimaryCard = CardDiv({
  style: cardStyle.primary,
  text: "Primary"
});

const SuccessCard = CardDiv({
  style: cardStyle.success,
  text: "Success"
});

const DangerCard = CardDiv({
  style: cardStyle.danger,
  text: "Danger"
});

elements.push(PrimaryCard, SuccessCard, DangerCard);

CardContainer.innerHTML = elements.join("");

export default CardContainer;
