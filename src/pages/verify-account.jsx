import React from "react";
import Layout from "../components/Layout/Layout";
import UploadDocuments from "../components/UploadDocument/UploadDocument";

const Verify = ({ data }) => {
  return (
    <Layout>
      <UploadDocuments />
    </Layout>
  );
};

export default Verify;

// export async function getServerSideProps({ req, res }) {
//   try {
//     const token = getCookie("authtoken", { req, res });
//     const response = await fetch(
//       `https://groob-back-production.up.railway.app/profile`,
//       {
//         headers: {
//           authtoken: token,
//         },
//         credentials: "include",
//       }
//     );
//     const data = await response.json();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.table(error);
//   }
// }
