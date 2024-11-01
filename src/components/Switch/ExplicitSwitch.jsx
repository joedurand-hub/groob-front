import { useState, useEffect } from "react";
import usePut from "../../hooks/usePut";
import Switch from "react-switch";
import { ENDPOINT } from "../../helpers/constants";
import { Toaster, toast } from "react-hot-toast";

const Index = ({ id, valueDB }) => {
  const [value, setValue] = useState(valueDB);
  const [toggleValue, setToggleValue] = useState(value);

  const { sendUpdatedData } = usePut();

  useEffect(() => {
    let valueAdultContent = window.localStorage.getItem("adultContent");
    if (valueAdultContent) setValue(JSON.parse(value));
  }, [value, toggleValue]);

  const handleExplicitContent = () => {
    setToggleValue(!toggleValue);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("adultContent", JSON.stringify(!toggleValue));
    }
    if (toggleValue === false) {
      toast(
        "Aceptas ser mayor de 18 años para ver contenido explícito (NSFW). Éste puede tardar unos minutos en actualizarse y ser visible la primera vez. \n\n",
        {
          duration: 4500,
        }
      );
    } else {
      toast("Ya no verás contenido explícito. Actualizando información...", {
        duration: 2500,
      });
    }
    sendUpdatedData({
      endpoint: `${ENDPOINT}/profile/${id}`,
      putData: {
        explicitContent: !toggleValue,
      },
    });
  };

  return (
    <>
      <Toaster />
      <Switch
        onChange={handleExplicitContent}
        checked={toggleValue}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </>
  );
};

export default Index;
