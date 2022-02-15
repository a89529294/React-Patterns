const StepOne = ({ goToNext }) => (
  <>
    <h1>step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>step 2</h1>
    <button onClick={() => goToNext({ age: 50 })}>next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>step 3</h1>
    <p>Congratz! You qualify for our senior discount.</p>
    <button onClick={() => goToNext({})}>next</button>
  </>
);
const StepFour = () => (
  <>
    <h1>step 4</h1>
  </>
);

export const ControlledOnBoardingFlow = ({
  children,
  currentIndex,
  onNext,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    onNext(stepData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
    console.log(onboardingData);
  };
  return (
    <>
      <ControlledOnBoardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnBoardingFlow>
    </>
  );
}
