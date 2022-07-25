import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import Icon from "../Icon/Icon"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";

import { RiChatSmile3Line } from "react-icons/ri"
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney, GiMoneyStack, GiTwoCoins } from "react-icons/gi"
import { BsCashCoin, BsHeartFill } from "react-icons/bs"

const url = `${ENDPOINT}${FOLLOW}`;

const Follow = ({token, id}) => {
  const { sendData } = useAuthPost();

  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        sigo_a: id,
      },
      token: token,
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Seguir"/>
      {/* <Button       name={ 
      <Icon>
      <GiPayMoney/>
      </Icon>}/>
      <Button       name={ 
      <Icon>
      <GiReceiveMoney/>
      </Icon>}/>
      <Button       name={ 
      <Icon>
      <GiMoneyStack/>
      </Icon>}/>
      <Button       name={ 
      <Icon>
      <GiTwoCoins/>
      </Icon>}/>
      <Button       name={ 
      <Icon>
      <BsCashCoin/>
      </Icon>}/>
      <Button       name={ 
      <Icon>
      <BsHeartFill/>
      </Icon>}/> */}
    </div>
  )
}

export default Follow