import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import Icon from "../Icon/Icon"
import { ENDPOINT, UNFOLLOW } from "../../helpers/constants";

import { RiChatSmile3Line } from "react-icons/ri"
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney, GiMoneyStack, GiTwoCoins } from "react-icons/gi"
import { BsCashCoin, BsHeartFill } from "react-icons/bs"

const url = `${ENDPOINT}${UNFOLLOW}`;

const Unfollow = ({token, id}) => {
  console.log(token, id)
  const { sendData } = useAuthPost();

  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        id_del_usuario_a_dejar_de_seguir: id,
      },
      token: token,
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Dejar de seguir"/>
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

export default Unfollow