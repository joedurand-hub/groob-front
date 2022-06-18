import { memo } from "react";
import Switch from "../Switch/Switch";
import Image from "next/image";

const User = ({ data, loading, error }) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: no se pudo traer la info...</p>}
      {!loading && data && (
        <section>
          <header>
            <div>
              <Image src={data?.profile_picture} width={200} height={200} />
            </div>
            <div>
              <h3>{data?.username}</h3>
            </div>

            <div>
              <span>
                <strong>
                  {(data && data.followers?.length === 0) ||
                  data.followers === null
                    ? 0
                    : data.followers?.length}
                </strong>
              </span>
              <span>Followers</span>

              <span>
                <strong>
                {(data && data.publications?.length === 0) ||
                data.publications === null
                  ? 0
                  : data.publications?.length}
                </strong>
              </span>
              <span>
                Publications
              </span>

              <span>
                <strong>
                  {(data && data.followings?.length === 0) ||
                  data.followings === null
                    ? 0
                    : data.followings?.length}
                </strong>
              </span>
              <span>Followings</span>
            </div>
            <br />
          </header>
        </section>
      )}
      <div>
        <span>{data?.description}</span>
      </div>
      <hr />
      <div>
        <button>Editar perfil</button> <button>Premium</button>
        <button>Añadir cuenta bancaria</button>
        <button>Responder preguntas</button>
      </div>
      <hr />
      <br />
      <Switch />
    </>
  );
};

export default memo(User);
