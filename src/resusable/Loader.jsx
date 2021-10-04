import PulseLoader from "react-spinners/PulseLoader";
const override = `
  display: block;
  border-color: red;
  position:absolute;
  top:250px;
  margin-left:50%;
  z-index:1;
  background-attachment	:fixed;
  transform:translate(-50%);
`;

const Loader = (props) => {
    return (
        <div className="loader-background">
            <PulseLoader
                color={"#00d1b2"}
                css={override}
                loading={props.value}
                size={20} 
                margin={30}
                />
        </div>
    )
}

export default Loader;