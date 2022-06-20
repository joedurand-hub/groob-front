import { useRouter } from "next/router";
import Button from "../components/Button/Button";

function Terms() {
  const router = useRouter();

  return (
    <div>
    
        <div>
  
          <h5>Author: Joel Durand</h5>
          <p >
            <strong>Exercitation ullamco:</strong> <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br/>
            - Quis nostrud exercitation ullamco laboris <br/>
            - Quis nostrud exercitation ullamco laboris <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br/>
            <strong>Tempor incididunt ut labore:</strong>  <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br/>
            <strong>Exercitation ullamco:</strong> <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br/>
            - Quis nostrud exercitation ullamco laboris <br/>
            - Quis nostrud exercitation ullamco laboris <br/>
            - Quis nostrud exercitation ullamco laboris <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br/>
            <strong>Tempor incididunt ut labore:</strong>  <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <footer >

          <Button
            name="Accept"
            onClick={() => {
              router.push("/");
            }}
          />
        </footer>
    </div>
  );
}

export default Terms;
